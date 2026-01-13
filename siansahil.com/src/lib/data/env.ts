export type AppEnv = {
    STRAPI_GRAPHQL_URL: string
    STRAPI_ROOT: string
    STRAPI_URL: string
}

export function resolveEnv(runtimeEnv?: Record<string, any>): AppEnv {
    const e = runtimeEnv ?? (import.meta as any).env
    return {
        STRAPI_GRAPHQL_URL: e.VITE_STRAPI_GRAPHQL_URL,
        STRAPI_ROOT: e.VITE_STRAPI_ROOT,
        STRAPI_URL: e.VITE_STRAPI_URL,
    }
}
