import {Link} from "@tanstack/react-router";
import Typography from "@/components/typography";

export interface MenuItemProps {
    id: number;
    displayName: string;
    slug: string;
    category: string;
    lg?: boolean
}
const MenuItem = ({displayName, slug, lg}:MenuItemProps) => {

    return (
        <div>
            <Link
                to={slug}
                search={{}}
                params={{}}
            >
                <Typography underline={lg} level={lg ? "4" :"button"} value={displayName}>
                </Typography>
            </Link>
        </div>
    )
}

export default MenuItem

