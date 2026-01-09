import Image, { StrapiImage } from "@/components/image";
import Typography from "@/components/typography";
import {RouterInjectedProps} from "@/components/hoc/withRouter";

interface PostProps {
    title: string;
    description: string;
    image: StrapiImage;
    slug: string;
    clickable: boolean;
    documentId: string;
    disabled?: boolean
    category?: string
}

const ListPost =
    ({ disabled, clickable, slug, documentId, title, description, image, goToPost}: PostProps & RouterInjectedProps
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
                 flex-1 
                 w-full
                 border-1 border-[#000000]
                 hover:bg-[#ffffff]
                 transition-all
                 flex
                 lg:gap-10
                 gap-4
                 ${disabled && "bg-[#E3E3E3] text-gray-500"}
                 rounded-4xl transition-all p-6  mb-6 ${
                    clickable ? "cursor-pointer" : ""
                }`}
            >
                <div className={"flex-1 max-w-[150px]"}>
                    <Image image={image} className={'rounded-2xl w-full aspect-square object-cover object-top'} />
                </div>
                <div className={"flex-1"}>
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex-1 '}>
                            <Typography underline level={"3"} value={title} />
                        </div>
                    </div>
                    <Typography level={"p"} value={description} />
                </div>

            </div>
        );
    };

export default ListPost;
