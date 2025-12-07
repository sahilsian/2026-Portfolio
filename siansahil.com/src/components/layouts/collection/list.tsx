import Post from "@/components/post";
import {withRouter} from "@/components/hoc/withRouter";

interface ListProps {
    collection: any[]
}

const PostWithRouter = withRouter(Post);
export const List = ({collection}:ListProps) => {
    return (
        <div className={"flex relative z-index-[20] flex-wrap gap-4 "}>
            {collection.map((item) => {
                return <PostWithRouter
                    key={item.slug}
                    slug={item.slug}
                    documentId={item.documentId}
                    title={item.title}
                    clickable={true}
                    description={item.description}
                    image={item.image}

                />
            })}
        </div>
    )
}