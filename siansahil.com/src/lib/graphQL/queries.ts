import {gql} from "@apollo/client";
import {BUTTON_FIELDS, IMAGE_FIELDS, VARIATION_FIELDS} from "@/lib/graphQL/fragments.ts";

export const NO_LIMIT = { pagination: { limit: 100, start: 0 } };

export const STANDARD_PAGINATION = {
    pagination: {
        page: 1,
        pageSize: 6,
    }
}

export const MENU = gql`
    query Menu($pagination: PaginationArg) {
      menu {
        title
        mainMenuItems(pagination: $pagination) {
          slug
          id
          displayName
          category
        }
      }
    }
`;

export const ARTWORK_PAGE = gql`
    ${VARIATION_FIELDS}
    query ArtworkLayout {
      artLayout {
        collection {
          id
          variation {
            ...VariationFields
          }
          title
          description
        }
      }
    }
`

export const SOFTWARE_PAGE = gql`
    ${VARIATION_FIELDS}
    query SoftwareLayout {
      softwareLayout {
        collection {
          id
          variation {
            ...VariationFields
          }
          title
          description
        }
      }
    }
`

export const HOME_PAGE = gql`
    ${IMAGE_FIELDS}
    ${BUTTON_FIELDS}
    ${VARIATION_FIELDS}
    
    query Home {
      home {
        documentId
        wrapper {
            hero {
              id
              title
              description
        
              primary {
                ...ButtonFields
              }
        
              hero_image {
                ...ImageFields
              }
        
              profile_image {
                ...ImageFields
              }
        
              variation {
                ...VariationFields
              }
            }
        
            art_primary {
              id
              title
              description
              variation {
                ...VariationFields
              }
              
              primary {
                ...ButtonFields
              }
              image {
                ...ImageFields
              }
            }
        
            art_secondary {
              id
              title
              description
              image {
                ...ImageFields
              }
              primary {
                ...ButtonFields
              }
              variation {
                ...VariationFields
              }
            }
        
            software_statement {
              id
              title
              description
              variation {
                ...VariationFields
              }
              primary {
                ...ButtonFields
              }
            }
        }
      }
    }
`

export const FOOTER = gql`
    query Footer($pagination: PaginationArg) {
      footer {
        title
        description
        footerMenuItems(pagination: $pagination) {
          displayName
          slug
          category
          id
        }
      }
    }

`;

export const ART_COLLECTION = gql`
    ${IMAGE_FIELDS}
    
    query Arts_connection($pagination: PaginationArg) {
        arts_connection(pagination: $pagination) {
        nodes {
          title
          description
          slug
          documentId
          image {
          ...ImageFields
          }
        }
        pageInfo {
          page
          pageCount
          pageSize
          total
        }
      }
    }
`;

export const ART_ITEM = gql`
    ${IMAGE_FIELDS}
    query Art($documentId: ID!) {
          art(documentId: $documentId) {
                title
                slug
                image {
                  ...ImageFields
                }
                description
                tabs {
                  title
                  richDescription
                }
              }
    }
`

export const SOFTWARE_COLLECTION = gql`
    ${IMAGE_FIELDS}
    
    query Softwares {
      softwares(sort: "order:asc") {
        title
        description
        slug
        documentId
        image {
          ...ImageFields
        }
      }
    }   
`;

export const SOFTWARE_ITEM = gql`
    ${IMAGE_FIELDS}
    query Software($documentId: ID!) {
          software(documentId: $documentId) {
                title
                slug
                image {
                  ...ImageFields
                }
                description
                tabs {
                  title
                  richDescription
                }
              }
    }
`

