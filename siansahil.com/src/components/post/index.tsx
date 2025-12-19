import Image, { StrapiImage } from "@/components/image";
import Typography from "@/components/typography";
import Spacer from "@/components/spacer";
import {RouterInjectedProps} from "@/components/hoc/withRouter";

interface PostProps {
    title: string;
    description: string;
    image: StrapiImage;
    slug: string;
    clickable: boolean;
    documentId: string;
}

const Post =
    ({ clickable, slug, documentId, title, description, image, goToPost}: PostProps & RouterInjectedProps
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
                 rounded-4xl transition-all p-6 min-w-[380px] mb-6 ${
                clickable ? "cursor-pointer" : ""
            }`}
        >
            <Image image={image} className={'rounded-2xl'} />
            <Spacer height={"20px"} />
            <Typography underline level={"3"} value={title} />
            <Typography level={"p"} value={description} />
        </div>
    );
};

export default Post;
