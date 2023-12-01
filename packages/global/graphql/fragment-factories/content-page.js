const gql = require('graphql-tag');

module.exports = ({ leadersAlias, useLinkInjectedBody = false } = {}) => gql`
fragment LeadersContentPageFragment on Content {
  id
  name
  labels
  teaser(input: { useFallback: false, maxLength: null })
  body(input: { useLinkInjectedBody: ${useLinkInjectedBody} })
  status
  published
  siteContext {
    path
    canonicalUrl
  }
  company {
    id
    name
    enableRmi
    siteContext {
      path
      canonicalUrl
    }
  }
  taxonomy(input: { type: Category }) {
    edges {
      node {
        id
        name
        hierarchy {
          id
          name
        }
      }
    }
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src(input: { useCropRectangle: true, options: { auto: "format,compress", q: 70 } })
    cropRectangle {
      width
      height
    }
    alt
    caption
    credit
    isLogo
    cropDimensions {
      aspectRatio
    }
    primaryImageDisplay
  }
  images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
    edges {
      node {
        id
        src(input: { options: { auto: "format,compress", q: 70 } })
        alt
        displayName
        caption
        credit
        isLogo
        inCarousel
      }
    }
  }
  companies: relatedContent(input: { includeContentTypes: [Company] }) {
    edges {
      node {
        id
      }
    }
  }
  slideshows: relatedContent(input: { includeContentTypes: [MediaGallery] }) {
    edges {
      node {
        id
        images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
          edges {
            node {
              id
              src(input: { options: { auto: "format,compress", q: 70 } })
              alt
              displayName
              caption
              credit
              isLogo
              inCarousel
            }
          }
        }
      }
    }
  }
  gating {
    surveyType
    surveyId
  }
  userRegistration {
    isCurrentlyRequired
    accessLevels
  }
  ... on ContentVideo {
    embedCode
    transcript
  }
  ... on ContentPodcast {
    transcript
  }
  ... on ContentNews {
    source
    byline
  }
  ... on ContentEvent {
    endDate
    startDate
  }
  ... on SidebarEnabledInterface {
    sidebarStubs {
      name
      body
      label
    }
  }
  ... on ContentWebinar {
    linkUrl
    startDate
    transcript
    sponsors {
      edges {
        node {
          id
          name
          siteContext {
            path
          }
        }
      }
    }
  }
  ... on Addressable {
    address1
    address2
    cityStateZip
    country
  }
  ... on Contactable {
    phone
    tollfree
    fax
    website
    title
    mobile
    publicEmail
  }
  ... on ContentCompany {
    email
    isLeader: hasWebsiteSchedule(input: { sectionAlias: "${leadersAlias}" })
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  ... on Media {
    fileSrc
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          title
          type
          siteContext {
            path
          }
          primaryImage {
            id
            src(input: { options: { auto: "format,compress" } })
            alt(input: { append: "Headshot" })
          }
        }
      }
    }
    contributors {
      edges {
        node {
          id
          name
          title
          type
          siteContext {
            path
          }
        }
      }
    }
    photographers {
      edges {
        node {
          id
          name
          title
          type
          siteContext {
            path
          }
        }
      }
    }
  }
  # finds linked projects (architectural showcase, etc) of this content item
  projectShortIds: customAttribute(input: {
    path: "projectShortIds"
  })
}
`;
