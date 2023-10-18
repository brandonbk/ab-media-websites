const gql = require('graphql-tag');

module.exports = (leadersAlias) => gql`

fragment LeadersWebsiteContentCompanyFragment on Content {
  id
  type
  name
  teaser(input: { maxLength: 0 })
  body

  siteContext {
    path
  }
  ... on Inquirable {
    enableRmi
  }
  ... on ContentCompany {

    address1
    address2
    cityStateZip
    country

    phone
    tollfree
    fax
    website
    title
    mobile
    email
    publicEmail

    youtube {
      username
      channelId
      url
    }

    # kv data
    yearsInOperation
    numberOfEmployees
    salesChannels
    salesRegion

    # long text data
    productSummary
    servicesProvided
    serviceInformation
    trainingInformation
    warrantyInformation

    # circle image
    leadersLogo: primaryImage {
      id
      src(input: { options: { auto: "format,compress", q: 70, fillColor: "fff", fit: "fill", h: 125, w: 125, pad: 5, mask: "ellipse" } })
      alt
    }

    primaryImage {
      id
      src(input: { useCropRectangle: true, options: { auto: "format,compress", q: 70 } })
      alt
      caption
      credit
      isLogo
      cropDimensions {
        aspectRatio
      }
      primaryImageDisplay
    }

    children(input: { pagination: { limit: 25 } }) {
      edges {
        node {
          name(input: { mutation: null })
          address1
          address2
          cityStateZip
          country
          phone
          tollfree
          fax
          publicEmail
        }
      }

    isLeader: hasWebsiteSchedule(input: { sectionAlias: "${leadersAlias}" })

    contacts: publicContacts {
      edges {
        node {
          id
          name
          title
          publicEmail
          primaryImage {
            id
            src(input: { options: { auto: "format,compress", q: 70, h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
          }
        }
      }
    }

    videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
      edges {
        node {
          id
          url
          title
          published
          thumbnail(input: { size: high })
        }
      }
    }
    websiteSchedules {
      section {
        id
        alias
        name
        fullName
      }
    }
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  # finds linked projects (architectural showcase, etc) of this content item
  projectShortIds: customAttribute(input: {
    path: "projectShortIds"
  })
}

`;
