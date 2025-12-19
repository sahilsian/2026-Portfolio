import Typography from "@/components/typography";
import Button, {ButtonData} from "@/components/button";
import Image, {StrapiImage} from "@/components/image";

interface ContentProps {
    title: string;
    description: string;
    profile: StrapiImage;
    primary: ButtonData,
    secondary: ButtonData
}
export const Content = ({title="Test", description="Test", profile, primary, secondary}:ContentProps) => {
    return (
        <div className={"absolute lg:max-w-[900px] flex lg:items-center w-full py-32 px-4 lg:px-22 lg:mt-10"}>
            <div className={"w-full  z-20 max-w-[840px] px-4 lg:p-4"}>
                <div className={"flex items-center gap-4"}>
                    <div className={"w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden mb-2 lg:mb-4 border-2 border-black"}>
                        <Image className={"w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]"} image={profile} />
                    </div>
                    <Typography value={title} level={"1"}></Typography>
                </div>
                <Typography value={description} level={"p"}></Typography>
                <div className={"ControlGroup flex gap-4 mt-6 lg:mt-10"}>
                    <Button button={primary} ></Button>
                    <Button button={secondary}></Button>
                </div>

            </div>
        </div>
    )
}

