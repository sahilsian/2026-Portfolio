import {Github} from "lucide-react";
import Icon from "@/components/Icon";

export interface IconRendererProps {
    icons: {
        url: string;
        iconName: string;
    }
}

const IconRenderer = ({icons}:IconRendererProps) => {
    switch (icons.iconName) {
        case 'github': return <img src={"/github"} />;
        default: return <></>
    }
}

export default IconRenderer