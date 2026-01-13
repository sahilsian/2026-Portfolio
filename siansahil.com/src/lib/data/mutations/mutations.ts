import {createServerFn} from "@tanstack/react-start";
import {SUBMIT_FORM} from "@/lib/data/mutations/gql.ts";
import {getGqlClient} from "@/lib/data/gqlServerClient.ts";
import {z} from "zod";

const FieldSubmissionSchema = z.object({
    fieldId: z.string(),
    fieldName: z.string(),
    fieldType: z.enum(['text', 'email', 'textarea', 'dropdown']),
    value: z.union([z.string(), z.boolean(), z.array(z.string())]),
})

const MetadataSchema = z.object({
    userAgent: z.string(),
    submittedAt: z.string(),
    submissionAttempt: z.number(),
    referrer: z.string().optional(),
})

const SubmissionInputSchema = z.object({
    formId: z.string(),
    payload: z.object({
        fields: z.array(FieldSubmissionSchema),
    }),
    metadata: MetadataSchema,
})

export const submitForm = createServerFn()
    .inputValidator(SubmissionInputSchema)
    .handler(async ({ data }) => {
        const client = getGqlClient();

        const submissionData = {
            form: data.formId,
            payload: JSON.stringify(data.payload),
            metadata: JSON.stringify(data.metadata),
        };

        try {
            const result = await client.request(SUBMIT_FORM, {
                data: submissionData
            });

            return {
                success: true,
                submission: result.createSubmission,
            };
        } catch (error) {
            throw new Error('Failed to submit form');
        }
    });