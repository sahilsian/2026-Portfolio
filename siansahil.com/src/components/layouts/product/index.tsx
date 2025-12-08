import {StrapiImage} from "@/components/image";
import Typography from "@/components/typography";
import Spacer from "@/components/spacer";
import {useRouter} from "@tanstack/react-router";
import TabbedContent, {Tab} from "@/components/tabbedContent";
import {Media} from "@/components/layouts/product/media.tsx";
import Background from "@/components/layouts/product/background.tsx";

interface ProductLayoutProps {
    type?: string;
    title: string;
    slug?: string;
    image: StrapiImage;
    description: string;
    backgroundColor?: string;
    tabs: Tab[]
}

const ProductLayout = ({ title, description, image, tabs, backgroundColor="#EDEDED"}:ProductLayoutProps) => {
    const router = useRouter()
    return (
        <div style={{backgroundColor: backgroundColor}} className={'p-6 md:px-22 py-22 relative'}>
            <Background></Background>
            <div className={"Product relative z-30"}>
                <div className={"flex"}>
                    <div onClick={()=> router.history.back()}>
                        <Typography value={"Back"} level={"button"}></Typography>
                    </div>
                </div>
                <Spacer height={"10px"}></Spacer>
                <div className={"flex gap-10 flex-wrap"}>
                    <Media image={image}></Media>
                    <div className={"flex-2"}>
                        <Typography level={"2"} value={title}></Typography>
                        <Typography level={"p"} value={description}></Typography>
                        {/*<div>*/}
                        {/*    <Typography level={"6"} value={`${type}/${slug}`}></Typography>*/}
                        {/*</div>*/}
                        <Spacer height={"20px"}></Spacer>
                        <div>
                            <TabbedContent tabs={tabs}></TabbedContent>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProductLayout