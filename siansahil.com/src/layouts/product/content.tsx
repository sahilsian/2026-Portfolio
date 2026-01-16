import Typography from "@/components/typography";
import Spacer from "@/components/spacer";
import {Media} from "@/layouts/product/media.tsx";
import TabbedContent, {Tab} from "@/components/tabbedContent";
import {useRouter} from "@tanstack/react-router";
import {StrapiImage} from "@/components/image";
import {useAppState} from "@/hooks/useAppState.ts";
import Spinner from "@/components/spinner";

interface ContentProps {
    type?: string;
    title: string;
    slug?: string;
    image: StrapiImage;
    description: string;
    tabs?: Tab[];
    dateCreated?: string;
}

export const Content = ({title, description, image, tabs, dateCreated}:ContentProps) => {
    const router = useRouter()
    const ctx = useAppState()
    return (
        <div className={"Product relative z-30"}>
            <div className={"flex"}>
                <div onClick={()=> router.history.back()}>
                    <Typography value={"Back"} level={"button"}></Typography>
                </div>
            </div>
            <Spacer height={"10px"}></Spacer>
            <div className={"flex gap-10 flex-wrap"}>
                <div className={'flex-1'}>
                    <Media image={image}></Media>
                    {dateCreated && <>
                    <Spacer height={"10px"}></Spacer>
                    <Typography level={'6'} value={"Created on: " + dateCreated}></Typography>
                    </>}
                </div>

                <div className={"flex-2"}>
                    <div className={'flex items-center gap-3'}>
                        <Typography value={title} level={"2"}></Typography>
                        <div className={''}>
                            {ctx.isProcessing && <Spinner></Spinner>}
                        </div>
                    </div>
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

