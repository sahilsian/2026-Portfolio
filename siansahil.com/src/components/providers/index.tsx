import {PropsWithChildren} from "react";
import {StylesContextProps, StylesProvider} from "@/contexts/styles/stylesProvider.tsx";
import {StrapiProvider} from "@/contexts/strapi/strapiProvider.tsx";
import {AppStateProvider} from "@/contexts/appState/appStateProvider.tsx";
import {MenuProvider} from "@/contexts/menu/menuProvider.tsx";

interface ProvidersProps extends PropsWithChildren {
    styles: StylesContextProps,
    strapiRoot: string,

}
const Providers = ({styles,strapiRoot, children}:ProvidersProps) => {
    return (
        <StylesProvider colors={styles}>
            <body>
            <StrapiProvider rootStrapiURL={strapiRoot}>
                <AppStateProvider>
                    <MenuProvider>
                        {children}
                    </MenuProvider>
                </AppStateProvider>
            </StrapiProvider>
            </body>
        </StylesProvider>
    )
}

export default Providers