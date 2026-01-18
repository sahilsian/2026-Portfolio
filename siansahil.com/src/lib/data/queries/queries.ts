// lib/queries.ts
import { createServerFn } from "@tanstack/react-start";
import {z} from "zod";
import {
    FOOTER,
    HOME_PAGE,
    MENU,
    NO_LIMIT,
    PRODUCT_COLLECTION,
    CATEGORIES,
    STYLES,
    ROOT_SEO,
    FORM_ITEM,
    PRODUCT_ITEM_SLUG
} from "@/lib/data/queries/gql.ts";
import {getGqlClient} from "@/lib/data/gqlServerClient.ts";

// Styles
export const queryStyles = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(STYLES)
})

// SEO
export const queryRootSEO = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(ROOT_SEO)
})

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
                filters: z.object({
                        title: z.object({
                            contains: z.string(),
                        }).optional(),
                        category: z.object({
                            name: z.object({
                                eqi: z.string()
                            }),
                        }).optional(),
                    }).optional(),

                pagination: z.object({
                        page: z.number(),
                        pageSize: z.number(),
                    }).optional(),
            })
        )
        .handler(({data}) => {
            const client = getGqlClient();
            return client.request(PRODUCT_COLLECTION, data);
        })

export const queryCategories = createServerFn({ method: "GET" }).handler(() => {
    const client = getGqlClient();
    return client.request(CATEGORIES)
})

// Products - accepting a string parameter
export const queryProduct = createServerFn()
    .inputValidator(
        z.object({
            filters: z.object({
                    slug: z.object({
                        eq: z.string(),
                    })
                }).required(),
        })
    )
    .handler(async ({data}) => {
        const client = getGqlClient();
        return client.request(PRODUCT_ITEM_SLUG, data)
    })


export const queryForm = createServerFn()
    .inputValidator(z.object({documentId: z.string()}))
    .handler(async ({data}) => {
        const client = getGqlClient();
        return client.request(FORM_ITEM, {documentId: data.documentId})
    })
