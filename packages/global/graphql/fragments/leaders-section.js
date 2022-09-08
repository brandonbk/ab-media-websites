const gql = require('graphql-tag');

module.exports = gql`
fragment LeadersWebsiteSectionPageFragment on WebsiteSection {
  id
  name
  children(input:{ pagination: { limit: 0 }, sort: { field:name, order:asc } }) {
    edges {
      node {
        id
        name
        # Support second-tier hierarchy for packworld
        children(input:{ pagination: { limit: 0 }, sort: { field: name, order: asc } }) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
`;
