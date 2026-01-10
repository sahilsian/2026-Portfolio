import {
    HeadContent,
    createRootRouteWithContext, Scripts,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'
import type {QueryClient} from "@tanstack/react-query";
import type {TRPCOptionsProxy} from "@trpc/tanstack-react-query";
import type {TRPCRouter} from "@/integrations/trpc/router.ts";
import {getStrapiRoot, queryFooter, queryMenu, queryRootSEO, queryStyles} from "@/lib/graphQL/gqlClient.ts";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import {StrapiProvider} from "@/contexts/strapi/strapiProvider.tsx";
import {MenuProvider} from "@/contexts/menu/menuProvider.tsx";
import {StylesContextProps, StylesProvider} from "@/contexts/styles/stylesProvider.tsx";
import {rootSEO} from "@/components/seo/interfaces.ts";

interface MyRouterContext {
    queryClient: QueryClient
    trpc: TRPCOptionsProxy<TRPCRouter>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({

    beforeLoad: async ({ context }) => {

        const rootSEO = await context.queryClient.ensureQueryData({
            queryKey: ['seo', 'root'],
            queryFn: queryRootSEO
        });


        const strapiRoot = await context.queryClient.ensureQueryData({
            queryKey: ['strapiRoot'],
            queryFn: getStrapiRoot
        })

        const stylesData = await context.queryClient.ensureQueryData({
            queryKey: ['styles'],
            queryFn: queryStyles
        })

        const styles:StylesContextProps = stylesData.style;

        const menu = await context.queryClient.ensureQueryData({
            queryKey: ['menu'],
            queryFn: queryMenu
        })
        const footer = await context.queryClient.ensureQueryData({
            queryKey: ['footer'],
            queryFn: queryFooter
        })

        return {
            rootSEO: rootSEO.rootSeo,
            styles: styles,
            menu: menu.menu,
            footer: footer.footer,
            strapiRoot
        };

    },
    loader: async ({context}) => {
        return {
            rootSEO: context.rootSEO,
            styles: context.styles,
            menu: context.menu,
            footer: context.footer,
            strapiRoot: context.strapiRoot
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
                { name: "description", content: rootSEO.siteDescription},
                // OPEN GRAPH
                { property: 'og:title', content: rootSEO.siteTitle },
                { property: 'og:description', content: rootSEO.siteDescription },
                { property: 'og:image', content: rootSEO.siteOGImage.url },
                { property: 'og:type', content: "website" }
            ],
            links: [
                {
                    rel: 'stylesheet',
                    href: appCss,
                },
                {
                    rel: 'icon',
                    type: "image/png",
                    href: "/favicon-96x96.png",
                    sizes: "96x96"
                },
                {
                    rel: 'icon',
                    type: "image/svg+xml",
                    href: "/favicon.svg",
                },
                {
                    rel: 'shortcut icon',
                    href: "/favicon.ico",
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                {
                    rel: 'manifest',
                    href: "/manifest.json",
                },
                { rel: 'canonical', href: rootSEO.canonicalDomain }
            ],
        }
    },
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {

    const { styles, menu, footer, strapiRoot } = Route.useLoaderData();
    return (
        <html lang="en">
          <head>
            <HeadContent />
              {/*Critical CSS from server*/}
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

          <StylesProvider colors={styles}>
              <body>
                <StrapiProvider rootStrapiURL={strapiRoot}>
                    <MenuProvider>
                        <Menu backgroundColor={styles.menuHex} title={menu.title} menuItems={menu.mainMenuItems}></Menu>
                            {children}
                        <Footer backgroundColor={styles.menuHex} title={footer.title} description={footer.description} menuItems={footer.footerMenuItems}></Footer>
                    </MenuProvider>
                </StrapiProvider>
              </body>
          </StylesProvider>

          <Scripts />
        </html>
  )
}
