import Screen from "@/components/screen";
import {Content} from "@/components/layouts/hero/content.tsx"
import {StrapiImage} from "@/components/image";
import {Media} from "@/components/layouts/hero/media.tsx";
import {ButtonData} from "@/components/button";

type Variations = 'flex-row' | 'flex-row-reverse'

interface HeroLayoutProps {
    variation: Variations,
    image: StrapiImage,
    profile: StrapiImage,
    title: string,
    description: string
    primary: ButtonData
    secondary: ButtonData
}
const HeroLayout = ({variation, image, title, description, profile, primary, secondary}:HeroLayoutProps) => {

    return (
        <Screen>
            <div className={`Hero relative h-full flex-1 flex ${variation}`}>
                {/*absolute stack*/}
                {/*desktop-screens*/}
                <Media image={image} />
                {/*mobile screens*/}
                <Media mobile image={image} />
                <Content
                    profile={profile}
                    title={title}
                    description={description}
                    primary={primary}
                    secondary={secondary}
                />
            </div>
        </Screen>
    )
}

export default HeroLayout