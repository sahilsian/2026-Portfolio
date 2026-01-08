import Typography from "@/components/typography";
import {ControlInterface} from "@/hooks/useControl.ts";

interface ContentProps {
    title?: string;
    description?: string;
    controlMachine: ControlInterface
}
export const Content = ({controlMachine, title, description}:ContentProps) => {
    return (
        <div className={ `py-22 pb-6`}>
            <div className={'flex items-center gap-3'}>
                <div className={"typewriter-title  animate-typewriter-fast"}>
                    <Typography level={"2"} value={title}></Typography>
                </div>

                {controlMachine.state.mode == 'LOADING' &&
                    <div className="flex items-center justify-center mb-5">
                        <div
                            className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"
                        ></div>
                    </div>

                }
            </div>
            <div className={"typewriter-description  animate-typewriter-fast"}>
                <Typography level={"p"} value={description}></Typography>
            </div>
        </div>
    )
}