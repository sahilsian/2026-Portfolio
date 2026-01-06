import {List} from "@/components/layouts/collection/list.tsx";
import {Content} from "@/components/layouts/collection/content.tsx";
import {Background} from "@/components/layouts/collection/background.tsx";
import {PageInfoProps} from "@/components/pagination";

interface CollectionProps {
    collection: any[];
    title: string;
    description: string;
    type: string;
    pageInfo: PageInfoProps;
}
const Collection = ({collection, pageInfo, title, description, type}:CollectionProps) => {
    return (
        <div className={`Collection ${type} lg:px-22 px-6 bg-[#EDEDED] relative`}>
            <Background></Background>
            <Content title={title} description={description}></Content>
            <List pageInfo={pageInfo} collection={collection}></List>
        </div>
    )
}

export default Collection