import {StrapiImage} from "@/components/image";
import {Tab} from "@/components/tabbedContent";

export interface Product {
    title:string;
    slug:string;
    image: StrapiImage;
    description:string;
    tabs: Tab[];
    dateCreated?: string;
}