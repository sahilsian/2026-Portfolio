import {
    HeadContent,
    createRootRouteWithContext,
    Scripts,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'
import type { QueryClient } from "@tanstack/react-query"
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query"
import type { TRPCRouter } from "@/integrations/trpc/router.ts"
import { queryFooter, queryMenu, queryRootSEO, queryStyles } from "@/lib/data/queries/queries.ts"
import Menu from "@/components/menu"
import Footer from "@/components/footer"
import type { StylesContextProps } from "@/contexts/styles/stylesProvider.tsx"
import type { rootSEO } from "@/components/seo/interfaces.ts"
import { getStrapiRoot } from "@/lib/data/gqlServerClient.ts"
import Providers from "@/decorators/providers"
import RouterSync from "@/components/routerSync"
import Typography from "@/components/typography";

interface MyRouterContext {
    queryClient: QueryClient
    trpc: TRPCOptionsProxy<TRPCRouter>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    loader: async ({ context }) => {
        const rootSEO = await context.queryClient.ensureQueryData({
            queryKey: ['seo', 'root'],
            queryFn: queryRootSEO,
        })

        const strapiRoot = await context.queryClient.ensureQueryData({
            queryKey: ['strapiRoot'],
            queryFn: getStrapiRoot,
        })

        const stylesData = await context.queryClient.ensureQueryData({
            queryKey: ['styles'],
            queryFn: queryStyles,
        })

        const menu = await context.queryClient.ensureQueryData({
            queryKey: ['menu'],
            queryFn: queryMenu,
        })

        const footer = await context.queryClient.ensureQueryData({
            queryKey: ['footer'],
            queryFn: queryFooter,
        })

        const styles: StylesContextProps = stylesData.style

        return {
            rootSEO: rootSEO.rootSeo,
            styles,
            menu: menu.menu,
            footer: footer.footer,
            strapiRoot,
        }
    },

    head: ({ loaderData }) => {
        const rootSEO: rootSEO = loaderData?.rootSEO ?? {
            siteTitle: 'Fluentclicks.com',
            siteDescription: 'Fluentclicks uses AI to generate leads that speak fluently to your business processes.',
            canonicalDomain: 'siansahil.com',
            siteOGImage: { url: '' },
        }

        return {
            meta: [
                { charSet: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { title: rootSEO.siteTitle },
                { name: "description", content: rootSEO.siteDescription },
                { property: 'og:title', content: rootSEO.siteTitle },
                { property: 'og:description', content: rootSEO.siteDescription },
                { property: 'og:image', content: rootSEO.siteOGImage.url },
                { property: 'og:type', content: "website" },
            ],
            links: [
                { rel: 'stylesheet', href: appCss },
                { rel: 'icon', type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
                { rel: 'icon', type: "image/svg+xml", href: "/favicon.svg" },
                { rel: 'shortcut icon', href: "/favicon.ico" },
                { rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: 'manifest', href: "/manifest.json" },
                { rel: 'canonical', href: rootSEO.canonicalDomain },
            ],
        }
    },
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    const loaderData = Route.useLoaderData()

    const styles = loaderData?.styles
    const menu = loaderData?.menu
    const footer = loaderData?.footer
    const strapiRoot = loaderData?.strapiRoot

    if (!styles || !menu || !footer || !strapiRoot) {
        return (
            <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
            <Typography value={"Oops! My website couldn't load. If you could reach out to sahilsiantech@gmail.com I will thankful <3."}></Typography>
            <Scripts />
            </body>
            </html>
        )
    }

    return (
        <html lang="en">
        <head>
            <HeadContent />
            <style>{`
          body {
            background-color: ${styles.backgroundHex};
          }

          .text_button {
            color: ${styles.textButtonHex};
          }

          .text_highlighted {
            color: ${styles.secondaryHex};
          }

          .text_secondary {
            color: ${styles.textSecondaryHex};
          }

          .icon_active {
            background-color: ${styles.iconActiveHex};
          }
        `}</style>
        </head>

        <body>
        <Providers styles={styles} strapiRoot={strapiRoot}>
            <RouterSync />
            <Menu backgroundColor={styles.menuHex} title={menu.title} menuItems={menu.mainMenuItems}></Menu>
            {children}
            <Footer backgroundColor={styles.menuHex} title={footer.title} description={footer.description} menuItems={footer.footerMenuItems}></Footer>
        </Providers>

        <Scripts />
        </body>
        </html>
    )
}
