import Post from "@/components/post";
import {withRouter} from "@/components/hoc/withRouter";
import {Control} from "@/components/layouts/collection/control.tsx";
import {PageInfoProps} from "@/components/pagination";


interface ListProps {
    collection: any[],
    pageInfo: PageInfoProps
}



const PostWithRouter = withRouter(Post);
export const List = ({collection, pageInfo}:ListProps) => {
    return (
        <Control pageCount={pageInfo.pageCount} total={pageInfo.total}>
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
        </Control>

    )
}