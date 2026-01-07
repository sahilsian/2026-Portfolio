import Post from "@/components/post";
import {withRouter} from "@/components/hoc/withRouter";
import {Control} from "@/components/layouts/collection/control.tsx";
import {PageInfoProps} from "@/components/pagination";
import {ControlInterface} from "@/hooks/useControl.ts";
import NoResults from "@/components/noResults";
import {CollectionCategory} from "@/components/renderers/collectionRenderer";


interface ListProps {
    collection: any[],
    pageInfo: PageInfoProps,
    controlMachine: ControlInterface
    categories: CollectionCategory[]
}



const PostWithRouter = withRouter(Post);
export const List = ({controlMachine, collection, pageInfo, categories}:ListProps) => {
    return (
        <Control categories={categories} controlMachine={controlMachine} pageCount={pageInfo.pageCount} total={pageInfo.total}>
            <div className={"flex relative z-index-[20] flex-wrap gap-4 "}>
                {collection.length === 0 &&
                    <div className={"min-h-[420px]"}>
                        <NoResults></NoResults>
                    </div>
                }
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