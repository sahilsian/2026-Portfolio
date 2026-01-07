// lib/gqlClient.ts
import { GraphQLClient } from "graphql-request";
import { createServerFn } from "@tanstack/react-start";
import {z} from "zod";
import { env } from "cloudflare:workers";
import {
    FOOTER,
    HOME_PAGE,
    ARTWORK_PAGE,
    MENU,
    NO_LIMIT,
    ART_ITEM,
    SOFTWARE_PAGE,
    SOFTWARE_COLLECTION,
    SOFTWARE_ITEM, STANDARD_PAGINATION, PRODUCT_COLLECTION, CATEGORIES,
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

export const queryArtwork = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(ARTWORK_PAGE);
});

export const querySoftware = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(SOFTWARE_PAGE);
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

export const querySoftwareCollection = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(SOFTWARE_COLLECTION, STANDARD_PAGINATION);
});

// Products - accepting a string parameter
export const queryArtProduct = createServerFn()
    .inputValidator(z.object({documentId: z.string()}))
    .handler(async ({data}) => {
        const client = getGqlClient();
        return client.request(ART_ITEM, {documentId: data.documentId})
    })

export const querySoftwareProduct = createServerFn()
    .inputValidator(z.object({documentId: z.string()}))
    .handler(async ({data}) => {
        const client = getGqlClient();
        return client.request(SOFTWARE_ITEM, {documentId: data.documentId})
})