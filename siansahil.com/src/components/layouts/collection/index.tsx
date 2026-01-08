import {List} from "@/components/layouts/collection/list.tsx";
import {Content} from "@/components/layouts/collection/content.tsx";
import {Background} from "@/components/layouts/collection/background.tsx";
import {PageInfoProps} from "@/components/pagination";
import {useControl} from "@/hooks/useControl.ts";
import {CollectionCategory} from "@/components/renderers/collectionRenderer";
import {useSearch} from "@tanstack/react-router";

interface CollectionProps {
    collection: any[];
    type: string;
    pageInfo: PageInfoProps;
    categories: CollectionCategory[]
}
const Collection = ({collection, pageInfo, type, categories}:CollectionProps) => {
    const controlMachine = useControl()
    const search = useSearch({ strict: false })

    const { layoutTitle, layoutDescription } = categories.find((category) =>
        category.category.name == (search.category || controlMachine.state.category)
    ) || {}


    return (
        <div key={search.category || "all"} className={`Collection ${type} lg:px-22 px-6 bg-[#EDEDED] relative`}>
            <Background></Background>
            <Content controlMachine={controlMachine} title={layoutTitle} description={layoutDescription}></Content>
            <List categories={categories} controlMachine={controlMachine} pageInfo={pageInfo} collection={collection}></List>
        </div>
    )
}

export default Collection