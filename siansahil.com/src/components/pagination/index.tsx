import {PaginationButton} from "@/components/pagination/button.tsx";
import {ReactNode} from "react";

/**
 * Pagination metadata for a paginated collection.
 */
export interface PageInfoProps {
    /**
     * The current page index (1-based).
     */
    page: number;

    /**
     * Total number of pages available.
     */
    pageCount?: number;

    /**
     * Number of items displayed per page.
     */
    pageSize: number;

    /**
     * Total number of items across all pages.
     */
    total?: number;
}

interface PaginationProps extends PageInfoProps {
}
const Pagination = ({ page, pageCount, pageSize}:PaginationProps):React.JSX.Element => {
    const createButtonElements = (pageCount:number):ReactNode => {
        var elements = []

        for(let i:number = 0; i < pageCount; i++) {
            elements.push(<PaginationButton pageSize={pageSize} selectedPage={page} idx={i+1}></PaginationButton>)
        }

        return elements
    }
    return (
        <div className={'flex gap-2'}>
            {
                createButtonElements(pageCount || 0)
            }
        </div>
    )
}

export default Pagination