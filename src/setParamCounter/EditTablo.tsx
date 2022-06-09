import React, {ChangeEvent, useState} from "react";
import {Buttons} from "../counter/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {changeTabloAC, setMaxValueAC, setStartValueAC} from "../redux/counterReducer";
import {AppStateType} from "../redux/store";


export const EditTablo = () => {

    const [disabledButton, setdisabledButton] = useState(false)

    const currentSetStartValue = useSelector<AppStateType, number>(state => state.counter.setStartValue)
    const currentSetMaxValue = useSelector<AppStateType, number>(state => state.counter.setMaxValue)

    const dispatch = useDispatch()

    const setValueHandler = () => {
        dispatch(changeTabloAC());
        setdisabledButton(true);
    }

    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let setStartValueHandler = +e.currentTarget.value
        dispatch(setStartValueAC(setStartValueHandler));
        setdisabledButton(false)
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let setMaxValueHandler = +e.currentTarget.value
        dispatch(setMaxValueAC(setMaxValueHandler));
        setdisabledButton(false)
    }

    return (
        <>
            <div className={'setTablo'}>
                <div className={'setInput'}>
                    <span className={'setValue'}>max value:</span>
                    <input
                        type="number"
                        className={currentSetStartValue >= currentSetMaxValue ? 'inputError' : 'input'}
                        value={currentSetMaxValue}
                        onChange={setMaxValueHandler}
                    />
                </div>
                <div className={'setInput'}>
                    <span className={'setValue'}>start value:</span>
                    <input
                        type="number"
                        className={currentSetStartValue >= currentSetMaxValue || currentSetStartValue < 0 ? 'inputError' : 'input'}
                        value={currentSetStartValue}
                        onChange={setStartValueHandler}
                    />
                </div>
            </div>
            <div className={'ButtonsCSS'}>
                <Buttons title={'set'} callBack={setValueHandler}
                         disabled={currentSetStartValue >= currentSetMaxValue || currentSetStartValue < 0 || disabledButton === true}
                />
            </div>
        </>)
}