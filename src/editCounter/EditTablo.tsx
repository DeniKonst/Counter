import React, {ChangeEvent, useState} from "react";
import {Buttons} from "../counter/Buttons";


type propsEditTabloType = {
    startValue: number
    maxValue: number
    callBack: (inputStartValue: number, inputMaxValue: number) => void
    changeStartValue: (inputStartValue: number) => void
    changeMaxValue: (inputMaxValue: number) => void
    inputStartValue: number
    inputMaxValue:number
    changeTablo:()=>void

}

export const EditTablo = (props: propsEditTabloType) => {

    const [disabledButton, setdisabledButton] = useState(false)

    const setValueHandler = () => {
        props.callBack(props.inputStartValue, props.inputMaxValue)
        setdisabledButton(true);
        props.changeTablo()
    }


    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value)
        setdisabledButton(false)

    }
    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.changeMaxValue(+e.currentTarget.value)

        setdisabledButton(false)
    }

    return (
        <>
            <div className={'setTablo'}>
                <div className={'setInput'}>
                    <span className={'setValue'}>max value:</span>
                    <input
                        type="number"
                        className={props.inputStartValue >= props.inputMaxValue ? 'inputError' : 'input'}
                        value={props.inputMaxValue}
                        onChange={setMaxValueHandler}
                    />
                </div>
                <div className={'setInput'}>
                    <span className={'setValue'}>start value:</span>
                    <input
                        type="number"
                        className={props.inputStartValue >= props.inputMaxValue || props.inputStartValue < 0 ? 'inputError' : 'input'}
                        value={props.inputStartValue}
                        onChange={setStartValueHandler}
                    />
                </div>
            </div>
            <div className={'ButtonsCSS'}>
                <Buttons title={'set'} callBack={setValueHandler}
                         disabled={props.inputStartValue >= props.inputMaxValue || props.inputStartValue < 0 || disabledButton === true}
                />
            </div>
        </>)

}