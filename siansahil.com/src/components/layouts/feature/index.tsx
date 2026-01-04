import Screen from "@/components/screen";
import {Content} from "@/components/layouts/feature/content.tsx";
import {Background} from "@/components/layouts/feature/background.tsx";
import { Media } from "./media";
import {StrapiImage} from "@/components/image";
import {ButtonData} from "@/components/button";

interface FeatureLayoutProps {
    variation: string;
    image: StrapiImage;
    title: string;
    description: string;
    primary: ButtonData
}
const FeatureLayout = ({variation, image, title, description, primary}:FeatureLayoutProps) => {
    return (
        <Screen>
            <div className={`Feature relative h-full flex-1 flex`}>
                <Background variation={variation} />
                <div className={`flex-col-reverse flex ${variation} flex-wrap z-20 w-full h-full`}>
                    <Media image={image} />
                    <Content primary={primary} title={title} description={description} />
                </div>
            </div>
        </Screen>
    )
}

export default FeatureLayout