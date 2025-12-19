import {StrapiContext} from "@/contexts/strapi/strapiContext.tsx";
import {ReactNode} from "react";

interface StrapiProviderProps {
    rootStrapiURL: string;
    children: ReactNode;
}
export const StrapiProvider = ({rootStrapiURL, children}:StrapiProviderProps) => {
    return (
        <StrapiContext value={rootStrapiURL}>
            {children}
        </StrapiContext>
    )
}

