import Typography from "@/components/typography";
import Spacer from "@/components/spacer";
import {Media} from "@/layouts/product/media.tsx";
import TabbedContent, {Tab} from "@/components/tabbedContent";
import {useRouter} from "@tanstack/react-router";
import {StrapiImage} from "@/components/image";

interface ContentProps {
    type?: string;
    title: string;
    slug?: string;
    image: StrapiImage;
    description: string;
    tabs?: Tab[];
}

export const Content = ({title, description, image, tabs}:ContentProps) => {
    const router = useRouter()
    return (
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
    )
}

