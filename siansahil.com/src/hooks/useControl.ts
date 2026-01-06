import {useReducer} from "react";
import {STANDARD_PAGINATION} from "@/lib/graphQL/queries.ts";

// (Q, Σ, δ, q₀, F)
// Q = Finite States that Exist
// Σ = Actions
// δ = Transition
// q₀ = Initial State

// Q States that exist
export interface PaginationProps {
    page: number,
    pageSize: number
}
interface State {
    mode: 'IDLE' | 'LOADING' | 'ERR',
    pagination: PaginationProps,
    search: string,
    filters: Record<string,any>
}

// Σ Actions
export enum ACTIONS_LIST {
    CHANGE_PAGE = "CHANGE_PAGE",
    SET_SUCCESS = "SET_SUCCESS",
    SET_ERROR = "SET_ERROR",
    SET_LOADING = "SET_LOADING"
}

type Action_ChangePage = {
    type: ACTIONS_LIST.CHANGE_PAGE;
    cargo: number
}

type Action_SetSuccess = {
    type: ACTIONS_LIST.SET_SUCCESS
}

type Action_SetError = {
    type: ACTIONS_LIST.SET_ERROR
}

type Action_SetLoading = {
    type: ACTIONS_LIST.SET_LOADING
}

type Action = Action_ChangePage | Action_SetSuccess | Action_SetError | Action_SetLoading

// δ Transition Function Map
const transitionFunc = (state:State, action:Action): State => {
    switch (action.type) {
        case ACTIONS_LIST.CHANGE_PAGE:
            return {
                ...state,
                mode: 'LOADING',
                pagination: {
                    ...state.pagination,
                    page: action.cargo
                }
            };
        case ACTIONS_LIST.SET_LOADING:
            return {
                ...state,
                mode: 'LOADING'
            }
        case ACTIONS_LIST.SET_ERROR:
            return {
                ...state,
                mode: "ERR"
            }
        case ACTIONS_LIST.SET_SUCCESS:
            return {
                ...state,
                mode: "IDLE"
            }
        default: {
            return state
        }
    }
}

// q₀ Initial State for State Machine
const initState:State = {
    mode: 'IDLE',
    pagination: {
        page: STANDARD_PAGINATION.pagination.page,
        pageSize: STANDARD_PAGINATION.pagination.pageSize
    },
    search: "",
    filters: {}
}

export interface ControlInterface {
    state:State
    changePage: (page:number) => void
    setSuccess: () => void
    setLoading: () => void
    setError: () => void
}

export const useControl = ():ControlInterface => {
    const [state, dispatch] = useReducer(transitionFunc, initState)

    return {
        state,
        changePage: (page: number) => dispatch({type: ACTIONS_LIST.CHANGE_PAGE, cargo: page}),
        setSuccess: () => dispatch({type: ACTIONS_LIST.SET_SUCCESS}),
        setLoading: () => dispatch({type: ACTIONS_LIST.SET_LOADING}),
        setError: () => dispatch({type: ACTIONS_LIST.SET_ERROR})
    }
}