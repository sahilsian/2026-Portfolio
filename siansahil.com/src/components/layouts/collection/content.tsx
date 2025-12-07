import Typography from "@/components/typography";

interface ContentProps {
    title: string;
    description: string;
}
export const Content = ({title, description}:ContentProps) => {
    return (
        <div className={ "py-22"}>
            <Typography level={"2"} value={title}></Typography>
            <Typography level={"p"} value={description}></Typography>
        </div>
    )
}