import {useStrapiURL} from "@/hooks/useStrapiURL.ts";

export interface StrapiImage {
    url: string;
    width: number;
    height: number;
    alternativeText?: string | null;
    caption?: string | null;
    name: string;
}

interface ImageProps {
    image: StrapiImage;
    className?: string;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    objectPosition?: "top" | "right" | "bottom" | "left";
}

const toImageProps = (img: StrapiImage, strapiRoot: string) => {
    const src = img.url.startsWith('https')
        ? img.url
        : `${strapiRoot}${img.url}`;

    return {
        src,
        width: img.width,
        height: img.height,
        alt: img.alternativeText || img.caption || img.name,
    };
};

const Image = ({
                   image,
                   objectFit = "cover",
                   objectPosition = "top",
                   className = "IMG"
               }: ImageProps) => {

    const strapiRoot = useStrapiURL();
    const props = toImageProps(image, strapiRoot);
    return (
        <img
            className={className}
            style={{ objectFit, objectPosition }}
            {...props}
        />
    );
};

export default Image;