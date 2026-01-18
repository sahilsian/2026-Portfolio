import {gql} from "@apollo/client";
import {BUTTON_FIELDS, IMAGE_FIELDS, SEO_FIELDS, VARIATION_FIELDS} from "@/lib/data/fragments.ts";

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


export const CATEGORIES = gql`
    ${SEO_FIELDS}
    query Categories {
      categories {
        category {
          name
        }
        layoutTitle
        layoutDescription
        seo {
          ...SeoFields
        }
      }
      
    }
`

export const STYLES = gql`
    query Style {
      style {
        backgroundHex
        menuHex
        primaryHex
        secondaryHex
        textPrimaryHex
        textSecondaryHex
        wrapperHex
        textButtonHex
        iconActiveHex   
      }
    }
`


export const HOME_PAGE = gql`
    ${IMAGE_FIELDS}
    ${BUTTON_FIELDS}
    ${VARIATION_FIELDS}
    ${SEO_FIELDS}
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
        seo {
          ...SeoFields
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

export const PRODUCT_COLLECTION = gql`
    ${IMAGE_FIELDS}
    query Products_connection($pagination: PaginationArg, $filters: ProductFiltersInput) {
        products_connection(pagination: $pagination, filters: $filters) {
        nodes {
          title
          description
          slug
          documentId
          category {
            name
          }
          image {
          ...ImageFields
          }
          dateCreated
          material
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

// Depreciated: Querying by slug instead of ID.
export const PRODUCT_ITEM = gql`
    ${IMAGE_FIELDS}
    query Product($documentId: ID!) {
          product(documentId: $documentId) {
                title
                slug
                category {
                    name
                }
                image {
                  ...ImageFields
                }
                description
                tabs {
                  title
                  richDescription
                }
                dateCreated
                material
              }
    }
`

export const PRODUCT_ITEM_SLUG = gql`
    ${IMAGE_FIELDS}
    query Product($filters: ProductFiltersInput) {
      products(filters: $filters) {
        title
        slug
        category {
            name
        }
        image {
          ...ImageFields
        }
        description
        tabs {
          title
          richDescription
        }
        dateCreated
        material
      } 
    }
`;

export const ROOT_SEO = gql`
    ${IMAGE_FIELDS}
    query RootSeo {
      rootSeo {
        robots
        siteDescription
        siteKeywords
        siteName
        siteTitle
        siteOGImage {
            ...ImageFields
        }
        canonicalDomain
      }
    }
`

export const FORM_ITEM = gql`
    ${IMAGE_FIELDS}
    
    query Form($documentId: ID!) {
  form(documentId: $documentId) {
    image {
        ...ImageFields
    }
    documentId
    title
    description
    fields {
      ... on ComponentFormTextField {
        required
        id
        name
        disabled
        className
        placeholder
        metadata {
          fieldType
        }
      }
      ... on ComponentFormDropdownField {
        required
        id
        name
        label
        options
        metadata {
          fieldType
        }
      }
      ... on ComponentFormTextareaField {
        required
        id
        name
        disabled
        className
        placeholder
        metadata {
          fieldType
        }
      }
      ... on ComponentFormEmailField {
        required
        id
        name
        disabled
        className
        placeholder
        metadata {
          fieldType
        }
      }
      
      ... on ComponentFormSubmissionField {
        name
        disabled
        className
        metadata {
          fieldType
        }
      }
      
      ... on Error {
        code
        message
      }
    }
    slug
  }
}
`

export const BLOG_COLLECTION = gql`
    query Blogs {
      blogs_connection {
        nodes {
          content
          publishedAt
          documentId
          excerpt
          tags {
            name
          }
          title
        }
      }
    }
`