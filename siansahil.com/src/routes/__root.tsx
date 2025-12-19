import {
    HeadContent,
    createRootRouteWithContext, Scripts,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'
// @ts-ignore
// import '@fontsource/inria-serif'
import type {QueryClient} from "@tanstack/react-query";
import type {TRPCOptionsProxy} from "@trpc/tanstack-react-query";
import type {TRPCRouter} from "@/integrations/trpc/router.ts";
import {getStrapiRoot, queryFooter, queryMenu} from "@/lib/graphQL/gqlClient.ts";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import {StrapiProvider} from "@/contexts/strapi/strapiProvider.tsx";
import {MenuProvider} from "@/contexts/menu/menuProvider.tsx";


interface MyRouterContext {
    queryClient: QueryClient
    trpc: TRPCOptionsProxy<TRPCRouter>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
    loader: async ({context}) => {
        const strapiRoot = await context.queryClient.ensureQueryData({
            queryKey: ['strapiRoot'],
            queryFn: getStrapiRoot
        })
        const menu = await context.queryClient.ensureQueryData({
            queryKey: ['menu'],
            queryFn: queryMenu
        })
        const footer = await context.queryClient.ensureQueryData({
            queryKey: ['footer'],
            queryFn: queryFooter
        })
        return { menu: menu.menu, footer: footer.footer, strapiRoot: strapiRoot }
    },
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    const { menu, footer, strapiRoot } = Route.useLoaderData();
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <StrapiProvider rootStrapiURL={strapiRoot}>
            <MenuProvider>
                <Menu title={menu.title} menuItems={menu.mainMenuItems}></Menu>
                    {children}
                <Footer title={footer.title} description={footer.description} menuItems={footer.footerMenuItems}></Footer>
            </MenuProvider>
        </StrapiProvider>
      </body>
      <Scripts />
    </html>
  )
}
