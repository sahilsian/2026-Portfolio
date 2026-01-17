import {StrapiImage} from "@/components/image";
import {Tab} from "@/components/tabbedContent";
import Background from "@/layouts/product/background.tsx";
import {Content} from "@/layouts/product/content.tsx";

interface ProductLayoutProps {
    type?: string;
    title: string;
    slug?: string;
    image: StrapiImage;
    description: string;
    backgroundColor?: string;
    tabs?: Tab[];
    dateCreated?: string;
    material?: string;
}

const ProductLayout = ({ title, description, image, tabs, dateCreated, material, backgroundColor="#EDEDED"}:ProductLayoutProps) => {
    return (
        <div style={{backgroundColor: backgroundColor}} className={'p-6 md:px-22 py-22 relative'}>
            <Background></Background>
            <Content dateCreated={dateCreated} material={material} title={title} description={description} image={image} tabs={tabs}></Content>
        </div>

    )
}

export default ProductLayout