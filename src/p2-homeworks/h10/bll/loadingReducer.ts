type stateType = {
    loading:boolean
}
const initState = {
loading:false
}

export const loadingReducer = (state:stateType = initState, action: { type:"CHANGE_SHOW", loading:boolean }): stateType => { // fix any
    switch (action.type) {
        case 'CHANGE_SHOW': {
            return {...state, loading:action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean): { type:string, loading:boolean } => {
    return{
        type:"CHANGE_SHOW",
        loading
    } as const
} // fix any