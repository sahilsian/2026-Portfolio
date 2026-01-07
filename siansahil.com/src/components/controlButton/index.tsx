import {PropsWithChildren} from "react";

interface ControlButtonProps extends PropsWithChildren {
    onClick: () => void,
    secondary?: boolean
}
const ControlButton = ({secondary, onClick, children}:ControlButtonProps) => {
    return (
        <div onClick={onClick} className={`border-1 ${secondary && "border-none"} p-[3px] px-2 hover:bg-white transition-all`}>
            {children}
        </div>
    )
}

export default ControlButton