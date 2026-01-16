import Image, {StrapiImage} from "@/components/image";


interface MediaProps {
    image: StrapiImage
}
export const Media = ({image}:MediaProps) => {
    return (
        <div className={"flex-1"}>
            <Image className={"min-w-[320px]"} image={image}></Image>
        </div>
    )
}

