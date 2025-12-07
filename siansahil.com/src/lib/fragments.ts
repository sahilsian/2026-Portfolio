import {gql} from "@apollo/client";
export const IMAGE_FIELDS = gql`
  fragment ImageFields on UploadFile {
    url
    width
    height
    alternativeText
  }
`;

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