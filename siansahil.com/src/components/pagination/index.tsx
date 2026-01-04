import {PaginationButton} from "@/components/pagination/button.tsx";
import {ReactNode} from "react";

export interface PageInfoProps {
    page: number,
    pageCount: number,
    pageSize?: number,
    total?: number
}
const Pagination = ({page, pageCount, pageSize, total}:PageInfoProps):React.JSX.Element => {
    const createButtonElements = (pageCount:number):ReactNode => {
        var elements = []

        for(let i:number = 0; i < pageCount; i++) {
            elements.push(<PaginationButton selectedPage={page} idx={i+1}></PaginationButton>)
        }

        return elements
    }
    return (
        <div className={'flex gap-2'}>
            {
                createButtonElements(pageCount)
            }
        </div>
    )
}

export default Pagination