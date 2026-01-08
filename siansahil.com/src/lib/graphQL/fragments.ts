import {gql} from "@apollo/client";
export const IMAGE_FIELDS = gql`
  fragment ImageFields on UploadFile {
    url
    width
    height
    alternativeText
  }
`;

export const SEO_FIELDS = gql`
    ${IMAGE_FIELDS}
    fragment SeoFields on ComponentSeoSeo {
          canonical
          description
          keywords
          robots
          title
          OGImage {
            ...ImageFields
          }
    }
`

export const BUTTON_FIELDS = gql`
    fragment ButtonFields on ComponentControlButton {
        variant
        target
        route
        label
        id
    }
`;

export const VARIATION_FIELDS = gql`
    fragment VariationFields on ComponentControlVariation {
        variation
    }
`