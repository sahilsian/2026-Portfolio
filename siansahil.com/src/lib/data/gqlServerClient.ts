import {createServerFn} from "@tanstack/react-start";
import { GraphQLClient } from "graphql-request";
import {resolveEnv} from "@/lib/data/env.ts";

export function getGqlClient(runtimeEnv?: any) {
    const env = resolveEnv(runtimeEnv)
    return new GraphQLClient(env.STRAPI_GRAPHQL_URL)
}

export const getStrapiRoot = createServerFn({ method: "GET" }).handler(() => {
    const env = resolveEnv()
    return env.STRAPI_ROOT;
});