import {PropsWithChildren, useState} from "react";
import Typography from "@/components/typography";
import DropdownInput from "@/components/dropdownInput";
import Pagination, {PageInfoProps} from "@/components/pagination";

interface ControlProps extends PropsWithChildren, PageInfoProps {
    collection: any;

}

enum ACTIONS {
    UPDATE_PAGE="UPDATE_PAGE"
}


const ControlHandler = (type:ACTIONS, state:any) => {
    switch(type) {
        case ACTIONS.UPDATE_PAGE:

    }
}

export const Control = ({page, pageCount, pageSize=1, total=0, collection, children}:ControlProps) => {
    const [itemCount, setItemCount] = useState<number>(collection.length)
    const [sortValue, setSortValue] = useState<string>("")

    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, total);

    return (
        <div className={'relative z-10 '}>
            <div className={'flex justify-between gap-2 mb-2'}>
                <div className={"flex items-center gap-[5px]"}>
                    <Typography level={'6'} value={"Showing"}></Typography>
                    <Typography level={'6'} value={`${start}-${end}`}></Typography>
                    <Typography level={'6'} value={"items"}></Typography>
                    <Typography level={'6'} value={"of"}></Typography>
                    <Typography level={'6'} value={total.toString()}></Typography>
                </div>
                <div>
                    <Pagination page={page} pageCount={pageCount} pageSize={pageSize} total={total}></Pagination>
                </div>
                {/*<div>*/}
                {/*    <DropdownInput value={sortValue}></DropdownInput>*/}
                {/*</div>*/}
            </div>

            {children}

            <div>

            </div>
        </div>
    )
}