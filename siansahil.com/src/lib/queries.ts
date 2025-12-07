import {gql} from "@apollo/client";
import {BUTTON_FIELDS, IMAGE_FIELDS, VARIATION_FIELDS} from "@/lib/fragments.ts";

export const NO_LIMIT = { pagination: { limit: 100, start: 0 } };
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
        layout {
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
        layout {
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
        hero {
          id
          title
          description
    
          primary {
            ...ButtonFields
          }
    
          secondary {
            ...ButtonFields
          }
    
          image {
            ...ImageFields
          }
    
          profile {
            ...ImageFields
          }
    
          variation {
            ...VariationFields
          }
        }
    
        featurePrimary {
          id
          title
          description
          variation {
            ...VariationFields
          }
          secondary {
            ...ButtonFields
          }
          profile {
            ...ImageFields
          }
          primary {
            ...ButtonFields
          }
          image {
            ...ImageFields
          }
        }
    
        featureSecondary {
          id
          title
          description
          image {
            ...ImageFields
          }
          primary {
            ...ButtonFields
          }
          profile {
            ...ImageFields
          }
          secondary {
            ...ButtonFields
          }
          variation {
            ...VariationFields
          }
        }
    
        statement {
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
    
    query Arts {
      arts(sort: "order:asc") {
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
                  tab {
                    title
                    description
                  }
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
                  tab {
                    title
                    description
                  }
                }
              }
    }
`

