import {createServerFn} from "@tanstack/react-start";
import { GraphQLClient } from "graphql-request";
import { envServer } from "./env.server.ts";
export const getGqlClient = () => {
    return new GraphQLClient(envServer.VITE_STRAPI_GRAPHQL_URL);
};

export const getStrapiRoot = createServerFn({ method: "GET" }).handler(() => {
    return envServer.VITE_STRAPI_ROOT;
});