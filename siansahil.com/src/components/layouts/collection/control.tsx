'use client'
import {PropsWithChildren, useEffect} from "react";
import Typography from "@/components/typography";
import Pagination from "@/components/pagination";
import {useNavigate, useRouterState, useSearch} from "@tanstack/react-router";
import {STANDARD_PAGINATION} from "@/lib/graphQL/queries.ts";
import SearchInput from "@/components/searchInput";
import {ControlInterface} from "@/hooks/useControl.ts";
import CategoryInput from "@/components/categoryInput";
import {CollectionCategory} from "@/components/renderers/collectionRenderer";

interface ControlProps extends PropsWithChildren {
    controlMachine: ControlInterface
    pageCount?: number,
    total?: number;
    categories: CollectionCategory[]
}

export const Control = ({ controlMachine, pageCount, total=0, children, categories}:ControlProps) => {
    const search = useSearch({ strict: false });
    const routerState = useRouterState()
    const navigate = useNavigate()

    const currentPage = search.page || STANDARD_PAGINATION.pagination.page;
    const currentPageSize = search.pageSize || STANDARD_PAGINATION.pagination.pageSize;

    const categoryOptions = categories.map((category) => {
        return { name: category.category.name }
    })


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


    // State Updates
    const handleSearchChange = (e:any) => {
        controlMachine.pushSearch(e.target.value)
    }
    const handleClear = async () => {
        controlMachine.clearSearch();
        await navigate({
            to: ".",
            search: (prev:any) => ({
                ...prev,
                title: ""
            })
        })

    }

    // State Commits
    const handleSearch = async () => {
        controlMachine.commitSearch();
        await navigate({
            to: ".",
            search: (prev:any) => ({
                ...prev,
                // reset page
                page: 1,
                title: controlMachine.state.search
            })
        })
    }
    const handleCategoryChange = async(e:any) => {
        const newCategory = e.target.value
        controlMachine.pushCategory(newCategory)
        await navigate({
            to: ".",
            search: (prev:any) => ({
                ...prev,
                // reset page
                page: 1,
                category: newCategory
            })
        })
    }

    return (
        <div className={'relative z-10 '}>
            <div className={'sm:flex sm:justify-between mb-2'}>
                <div className={'flex sm:justify-start justify-between gap-8 sm:items-center'}>
                    <div>
                        <Pagination page={currentPage} pageCount={pageCount} pageSize={currentPageSize} total={total}></Pagination>
                    </div>
                    <div>
                        <SearchInput
                            onEnter={async(e) => {
                                if(e.key === "Enter") await handleSearch()
                            }}
                            disabled={controlMachine.state.mode === "LOADING"}
                            showClear={!!controlMachine.state.search}
                            onClear={handleClear}
                            onSearch={handleSearch}
                            handleChange={(e:any) => handleSearchChange(e)}
                            value={controlMachine.state.search || ''}
                        ></SearchInput>
                    </div>
                </div>

                <div>
                    <div className={"max-w-[100px] ml-auto"}>
                        <CategoryInput
                            value={controlMachine.state.category || ''}
                            handleChange={(e:any) => handleCategoryChange(e)}
                            disabled={controlMachine.state.mode === "LOADING"}
                            options={categoryOptions}
                        >
                        </CategoryInput>
                    </div>
                </div>
            </div>

            {controlMachine.state.mode != "ERR" ?
                <div className={'py-4'}>
                    {children}
                </div>
                :
                <div>
                    <Typography level={"6"} value={"An error has occured. Please contact me with a screenshot!"}></Typography>
                </div>
            }

            <div>
                <Pagination page={currentPage} pageCount={pageCount} pageSize={currentPageSize} total={total}></Pagination>
            </div>
        </div>
    )
}