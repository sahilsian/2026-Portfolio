import Typography from "@/components/typography";
import {ControlInterface} from "@/hooks/useControl.ts";
import {useEffect, useState} from "react";

interface ContentProps {
    title?: string;
    description?: string;
    controlMachine: ControlInterface,
    categoryKey: string
}

export const Content = ({controlMachine, title, description, categoryKey}:ContentProps) => {
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Wait for page to fully load
        if (document.readyState === 'complete') {
            setIsPageLoaded(true);
        } else {
            const handleLoad = () => setIsPageLoaded(true);
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    useEffect(() => {
        if (!isPageLoaded) return;

        setAnimationComplete(false);

        // Small delay to ensure DOM is ready
        const startTimer = setTimeout(() => {
            // Animation completes after 1.5s (1.2s + 0.3s delay)
            const completeTimer = setTimeout(() => {
                setAnimationComplete(true);
            }, 1500);

            return () => clearTimeout(completeTimer);
        }, 50);

        return () => clearTimeout(startTimer);
    }, [categoryKey, isPageLoaded]);

    return (
        <div className={`py-22 pb-6`}>
            <div className={'flex items-center gap-3'}>
                <div
                    key={`title-${categoryKey}-${title}`}
                    className={`typewriter-title ${isPageLoaded ? 'animate' : ''}`}
                >
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
            <div
                key={`desc-${categoryKey}-${description}`}
                className={`typewriter-description ${isPageLoaded ? 'animate' : ''} ${animationComplete ? 'complete' : ''}`}
            >
                <Typography level={"p"} value={description}></Typography>
            </div>
        </div>
    )
}