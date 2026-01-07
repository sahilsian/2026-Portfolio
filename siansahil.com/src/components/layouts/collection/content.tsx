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
                <Typography level={"2"} value={title}></Typography>
                {controlMachine.state.mode == 'LOADING' &&
                    <div className="flex items-center justify-center mb-5">
                        <div
                            className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"
                        ></div>
                    </div>

                }
            </div>
            <Typography level={"p"} value={description}></Typography>
        </div>
    )
}