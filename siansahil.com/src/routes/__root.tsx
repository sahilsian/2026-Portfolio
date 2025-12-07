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
import {queryFooter, queryMenu} from "@/lib/gqlClient.ts";
import Menu from "@/components/menu";
import Footer from "@/components/footer";


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
        const menu = await context.queryClient.ensureQueryData({
            queryKey: ['menu'],
            queryFn: queryMenu
        })
        const footer = await context.queryClient.ensureQueryData({
            queryKey: ['footer'],
            queryFn: queryFooter
        })
        return { menu: menu.menu, footer: footer.footer }
    },
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    const { menu, footer } = Route.useLoaderData();
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Menu title={menu.title} menuItems={menu.mainMenuItems}></Menu>
        {children}
        <Footer title={footer.title} description={footer.description} menuItems={footer.footerMenuItems}></Footer>
      </body>
      <Scripts />
    </html>
  )
}
