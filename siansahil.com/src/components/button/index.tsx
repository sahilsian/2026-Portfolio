import Icon from "../Icon";
import Typography from "../typography";
import { ButtonType, getButtonType } from "./button";
import { Link } from "@tanstack/react-router";

export interface ButtonData {
    id: number;
    variant: ButtonType;
    label: string;
    target: "internal" | "external";
    route: string | null;
    icon?: {
        component: React.ReactElement<React.SVGProps<SVGSVGElement>>;
        size: "small" | "medium" | "large";
    } | null;
}

interface Props {
    button: ButtonData;
}

const Button = ({ button }: Props) => {
    const { variant, icon, label, route, target } = button;
    const classes = getButtonType(variant);

    // External
    if (target === "external" && route) {
        return (
            <a href={route} target="_blank" rel="noopener noreferrer">
                <button className={classes}>
                    {icon && <Icon size={icon.size} icon={icon.component} />}
                    <Typography level="button" value={label} />
                </button>
            </a>
        );
    }

    // Internal
    return (
        <Link to={route || "/"}>
            <button className={classes}>
                {icon && <Icon size={icon.size} icon={icon.component} />}
                <Typography level="button" value={label} />
            </button>
        </Link>
    );
};

export default Button;
