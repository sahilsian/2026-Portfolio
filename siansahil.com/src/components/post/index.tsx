import Image, { StrapiImage } from "@/components/image";
import Typography from "@/components/typography";
import Spacer from "@/components/spacer";
import {RouterInjectedProps} from "@/decorators/withRouter";

interface PostProps {
    title: string;
    description: string;
    image: StrapiImage;
    slug: string;
    clickable: boolean;
    documentId: string;
    disabled?: boolean
    category: string
}

const Post =
    ({ disabled, clickable, slug, documentId, title, description, image, goToPost, category}: PostProps & RouterInjectedProps
    ) => {
    const handleClick = () => {
        if (clickable) {
            goToPost(documentId, slug);
        }
    };

    return (
        <div
            onClick={handleClick}
                className={`
                max-w-[500px] flex-1 
                 border-1 border-[#000000]
                 hover:bg-[#ffffff]
                 transition-all
                 ${disabled && "bg-[#E3E3E3] text-gray-500"}
                 rounded-4xl transition-all p-6 lg:min-w-[380px]  min-w-[340px] mb-6 ${
                clickable ? "cursor-pointer" : ""
            }`}
        >
            <Image image={image} className={'rounded-2xl w-full aspect-square object-cover object-top'} />
            <Spacer height={"20px"} />
            <div className={'flex items-center justify-between'}>
                <div className={'flex-1 '}>
                    <Typography underline level={"3"} value={title} />
                </div>
                <Typography secondary level={"6"} value={category} />
            </div>
            <Typography level={"p"} value={description} />
        </div>
    );
};

export default Post;
