import React from 'react';
import {Buttons} from "./Buttons";
import {Tablo} from './Tablo';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {changeTabloAC, incCounterValueAC, resetCounterValueAC} from "../redux/counterReducer";

export const Counter = () => {

    const currentCounterValue = useSelector<AppStateType, number>(state => state.counter.counterValue)
    const currentSetStartValue = useSelector<AppStateType, number>(state => state.counter.setStartValue)
    const currentSetMaxValue = useSelector<AppStateType, number>(state => state.counter.setMaxValue)

    const dispatch = useDispatch()

    const incrementHandler = () => {
        if (currentCounterValue < currentSetMaxValue)
            dispatch(incCounterValueAC())
    }
    const resetHandler = () => {
        dispatch(resetCounterValueAC(currentSetStartValue))
    }
    const setHandler = () => {
        dispatch(changeTabloAC())
    }

    let error = null;
    if (currentSetMaxValue && currentSetStartValue)
        if (currentSetMaxValue <= currentSetStartValue || currentSetStartValue < 0) {
            error = 'invalid settings values'
        }

    return (

        <div className={'Container'}>
            <Tablo point={currentCounterValue} maxValue={currentSetMaxValue} error={error}/>

            <div className={'ButtonsCSS'}>
                <Buttons title={'inc'} callBack={incrementHandler}
                         disabled={currentCounterValue === currentSetMaxValue}/>

                <Buttons title={'reset'} callBack={resetHandler}
                         disabled={currentCounterValue === currentSetStartValue}/>
                <Buttons title={'set'} callBack={setHandler} disabled={currentSetStartValue < 0}/>
            </div>

        </div>)
}