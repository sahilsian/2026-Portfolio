// lib/gqlClient.ts
import { GraphQLClient } from "graphql-request";
import { createServerFn } from "@tanstack/react-start";
import {z} from "zod";
import { env } from "cloudflare:workers";
import {
    FOOTER,
    HOME_PAGE,
    MENU,
    NO_LIMIT,
    PRODUCT_COLLECTION,
    CATEGORIES,
    PRODUCT_ITEM,
} from "@/lib/graphQL/queries.ts";

// Helper to get the GraphQL client (server-side only)
const getGqlClient = () => {
    return new GraphQLClient(env.VITE_STRAPI_GRAPHQL_URL);
};

// Helper to get Strapi root URL
export const getStrapiRoot = createServerFn({ method: "GET" }).handler(() => {
    return env.VITE_STRAPI_ROOT;
});

// Pages
export const queryHome = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(HOME_PAGE);
});


// Navigation
export const queryMenu = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(MENU, NO_LIMIT);
});

export const queryFooter = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(FOOTER, NO_LIMIT);
});

// Collections
export const queryProductCollection =
    createServerFn({ method: "GET" })
        .inputValidator(
            z.object({
                filters: z
                    .object({
                        title: z.object({
                            contains: z.string(),
                        }).optional(),
                        category: z.object({
                            name: z.object({
                                eqi: z.string()
                            }),
                        }).optional(),
                    })
                    .optional(),

                pagination: z
                    .object({
                        page: z.number(),
                        pageSize: z.number(),
                    })
                    .optional(),
            })
        )
        .handler(({data}) => {
            const client = getGqlClient();
            return client.request(PRODUCT_COLLECTION, data);
        });

export const queryCategories = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(CATEGORIES)
})

// Products - accepting a string parameter
export const queryProduct = createServerFn()
    .inputValidator(z.object({documentId: z.string()}))
    .handler(async ({data}) => {
        const client = getGqlClient();
        return client.request(PRODUCT_ITEM, {documentId: data.documentId})
    })
