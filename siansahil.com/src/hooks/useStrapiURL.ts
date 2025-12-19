import {StrapiContext} from "@/contexts/strapi/strapiContext.tsx";
import {useContext} from "react";

export const useStrapiURL = () => {
    const ctx = useContext(StrapiContext)
    if(!ctx) throw new Error("Could not load context")
    return ctx
}