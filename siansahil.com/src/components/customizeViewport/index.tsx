import IconButton from "@/components/iconButton";
import {ControlInterface, Views, VIEWS} from "@/hooks/useControl.ts";
import {LayoutGrid, LayoutList} from "lucide-react";

interface CustomizeViewportProps {
    controlMachine: ControlInterface
    onClick: (view:Views) => void
}
const CustomizeViewport = ({ controlMachine, onClick }: CustomizeViewportProps) => {
    const viewConfig = {
        post: { icon: <LayoutGrid />, value: "post" },
        list: { icon: <LayoutList />, value: "list" }
    };

    return (
        <div className={'flex gap-2'}>
            {VIEWS.map(view => (
                <IconButton
                    active={controlMachine.state.view === view}
                    key={view}
                    icon={viewConfig[view].icon}
                    onClick={()=> onClick(view)}
                />
            ))}
        </div>
    );
}

export default CustomizeViewport