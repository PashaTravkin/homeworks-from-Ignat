import {UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: OllType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if(action.payload==='up'){
                state = [...state.sort((a, b) => a.age - b.age)]
            }
            else if(action.payload==='down') {
                state = [...state.sort((a, b) => a.age - b.age)].reverse()
            }
            return state
        }
        case 'check': {
            // need to fix

            state = state.filter(el => el.age>=action.payload)

            return [...state]
        }
        default:
            return state
    }
}

type OllType = sortATType|checkATType
type sortATType = {
    type: 'sort',
    payload: 'up'| 'down'
}

type checkATType = {
    type: 'check',
    payload: number
}
