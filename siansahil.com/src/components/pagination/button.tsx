import Typography from "@/components/typography";

interface PaginationButton {
    idx:number,
    selectedPage:number
}
export const PaginationButton = ({idx, selectedPage}:PaginationButton) => {
    const handlePaginate = () => {

    }

    return (
        <div onClick={handlePaginate} className={"hover:opacity-70 cursor-pointer"}>
            <Typography highlighted={idx == selectedPage} underline level={"6"} value={idx.toString()}></Typography>
        </div>
    )
}