import {gql} from "@apollo/client";

export const SUBMIT_FORM = gql`
    mutation CreateSubmission($data: SubmissionInput!) {
        createSubmission(data: $data) {
            documentId
            form {
                documentId
                title
            }
            createdAt
        }
    }
`