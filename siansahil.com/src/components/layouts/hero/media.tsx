import Image, {StrapiImage} from "../../image"
interface BackgroundProps {
    image: StrapiImage;
    mobile?: boolean
}

export const Media = ({image, mobile}: BackgroundProps) => {
    return mobile
        ?   <div className="HERO_IMG flex xl:hidden absolute w-full h-screen z-10 flex-1">
                <div className="flex w-full justify-end items-end">
                    <Image className={"max-h-[100%] max-w-[400px]  sm:max-w-[500px] ml-auto"} objectFit={"contain"} image={image} />
                </div>
            </div>
        :   <div className="HERO_IMG hidden xl:flex absolute w-full h-screen z-10 flex-1">
                <div className="flex w-full justify-end items-end">
                    <Image className={"max-h-[100%] max-w-[630px] ml-auto"} objectFit={"contain"} image={image} />
                </div>
            </div>

};
