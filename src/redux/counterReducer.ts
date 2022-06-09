const initialState = {
    counterValue: 0,
    setStartValue: 0,
    setMaxValue: 0,
    changeTablo: false
}

export type initialStateType = typeof initialState


export const counterReducer = (state:initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case "INC_COUNTER_VALUE": {
            return {
                ...state, counterValue: state.counterValue + 1
            }
        }
        case "RESET_COUNTER_VALUE": {
            return {
                ...state, counterValue: action.value
            }
        }

        case "SET_START_VALUE": {
            return {
                ...state, setStartValue: action.value, counterValue: action.value
            }
        }

        case "SET_MAX_VALUE": {
            return {
                ...state, setMaxValue: action.value
            }
        }

        case "CHANGE_TABLO": {
            return {
                ...state, changeTablo: !state.changeTablo
            }
        }

        default:
            return state
    }
}

type actionsType = incCounterValueACType | resetCounterValueACType | changeTabloACType |
    setStartValueACType | setMaxValueACType
export type incCounterValueACType = ReturnType<typeof incCounterValueAC>
export type resetCounterValueACType = ReturnType<typeof resetCounterValueAC>
export type changeTabloACType = ReturnType<typeof changeTabloAC>
export type setStartValueACType = ReturnType<typeof setStartValueAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>


export const incCounterValueAC = () => {
    return {
        type: "INC_COUNTER_VALUE",
    } as const
}

export const resetCounterValueAC = (currentSetStartValue: number) => {
    return {
        type: "RESET_COUNTER_VALUE", value: currentSetStartValue
    } as const
}

export const setStartValueAC = (inputStartValue: number) => {
    return {
        type: "SET_START_VALUE", value: inputStartValue
    } as const
}

export const setMaxValueAC = (inputMaxValue: number) => {
    return {
        type: "SET_MAX_VALUE", value: inputMaxValue
    } as const
}

export const changeTabloAC = () => {
    return {
        type: "CHANGE_TABLO",
    } as const
}