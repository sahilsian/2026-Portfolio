import {List} from "@/components/layouts/collection/list.tsx";
import {Content} from "@/components/layouts/collection/content.tsx";
import {Background} from "@/components/layouts/collection/background.tsx";

interface CollectionProps {
    collection: any[];
    title: string;
    description: string;
}
const Collection = ({collection, title, description}:CollectionProps) => {
    return (
        <div className={"Collection lg:px-22 px-6 bg-[#EDEDED] relative"}>
            <Background></Background>
            <Content title={title} description={description}></Content>
            <List collection={collection}></List>
        </div>
    )
}

export default Collection