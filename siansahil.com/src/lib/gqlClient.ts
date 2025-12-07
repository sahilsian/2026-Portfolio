import {GraphQLClient} from "graphql-request";
import {
    FOOTER,
    HOME_PAGE,
    ARTWORK_PAGE,
    MENU,
    NO_LIMIT,
    ART_COLLECTION,
    ART_ITEM,
    SOFTWARE_PAGE, SOFTWARE_COLLECTION, SOFTWARE_ITEM
} from "@/lib/queries.ts";
export const gqlClient = new GraphQLClient(import.meta.env.VITE_STRAPI_GRAPHQL_URL)

// pages
export const queryHome = () => {
    return gqlClient.request(HOME_PAGE)
}

export const queryArtwork = () => {
    return gqlClient.request(ARTWORK_PAGE)
}
export const querySoftware = () => {
    return gqlClient.request(SOFTWARE_PAGE)
}

// navigation
export const queryMenu = () => {
    return gqlClient.request(MENU, NO_LIMIT)
}

export const queryFooter = () => {
    return gqlClient.request( FOOTER, NO_LIMIT)
}

// collection
export const queryArtCollection = () => {
    return gqlClient.request(ART_COLLECTION)
}

export const querySoftwareCollection = () => {
    return gqlClient.request(SOFTWARE_COLLECTION)
}

// product
export const queryArtProduct = (documentId:string) => {
    return gqlClient.request(ART_ITEM, {
        documentId: documentId
    })
}

export const querySoftwareProduct = (documentId:string) => {
    return gqlClient.request(SOFTWARE_ITEM, {
        documentId: documentId
    })
}