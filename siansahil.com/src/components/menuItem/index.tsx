import {Link} from "@tanstack/react-router";
import Typography from "@/components/typography";

export interface MenuItemProps {
    id: number;
    displayName: string;
    slug: string;
    category: string;
}
const MenuItem = ({displayName, slug}:MenuItemProps) => {

    return (
        <div>
            <Link to={slug}>
                <Typography level={"button"} value={displayName}>
                </Typography>
            </Link>
        </div>
    )
}

export default MenuItem

