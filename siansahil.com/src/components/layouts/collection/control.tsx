import {PropsWithChildren, useEffect} from "react";
import Typography from "@/components/typography";
import Pagination from "@/components/pagination";
import {useControl} from "@/hooks/useControl.ts";
import {useRouterState, useSearch} from "@tanstack/react-router";
import {STANDARD_PAGINATION} from "@/lib/graphQL/queries.ts";

interface ControlProps extends PropsWithChildren {
    pageCount?: number,
    total?: number;
}

export const Control = ({ pageCount, total=0, children}:ControlProps) => {
    const search = useSearch({ strict: false });
    const controlMachine = useControl()
    const routerState = useRouterState()

    const currentPage = search.page || STANDARD_PAGINATION.pagination.page;
    const currentPageSize = search.pageSize || STANDARD_PAGINATION.pagination.pageSize;

    // Loading effects
    useEffect(() => {
        switch (routerState.status) {
            case "idle":
                controlMachine.setSuccess();
                console.log("SUCCESS")
                break;
            case "pending":
                controlMachine.setLoading();
                console.log("LOADING")
                break;
        }
    }, [routerState.status]);

    const start = (currentPage - 1) * currentPageSize + 1;
    const end = Math.min(currentPage * currentPageSize, total);

    return (
        <div className={'relative z-10 '}>
            <div className={'flex justify-between mb-2'}>
                <div className={'flex gap-8'}>
                    <div className={"flex items-center gap-[5px]"}>
                        <Typography level={'6'} value={"Showing"}></Typography>
                        <Typography level={'6'} value={`${start}-${end}`}></Typography>
                        <Typography level={'6'} value={"items"}></Typography>
                        <Typography level={'6'} value={"of"}></Typography>
                        <Typography level={'6'} value={total.toString()}></Typography>
                    </div>
                    <div>
                        <Pagination page={currentPage} pageCount={pageCount} pageSize={currentPageSize} total={total}></Pagination>
                    </div>
                    <div>

                    </div>
                </div>

                <div>


                    {controlMachine.state.mode == "LOADING" &&
                        <div>
                            <Typography level={"6"} value={"Loading..."}></Typography>
                        </div>
                    }

                </div>
            </div>

            {controlMachine.state.mode != "ERR" ?
                <div>
                    {children}
                </div>
                :
                <div>
                    <Typography level={"6"} value={"An error has occured. Please contact me with a screenshot!"}></Typography>
                </div>
            }

            <div>

            </div>
        </div>
    )
}