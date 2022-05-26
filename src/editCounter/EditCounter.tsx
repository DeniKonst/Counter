import React from 'react';
import {EditTablo} from "./EditTablo";

type PropsType = {
    startValue: number
    maxValue: number
    setValue: (inputStartValue: number, inputMaxValue: number) => void
    changeStartValue: (inputStartValue: number) => void
    changeMaxValue: (inputMaxValue: number) => void
    inputStartValue: number
    inputMaxValue:number
    changeTablo: ()=>void

}

export const EditCounter = (props: PropsType) => {

    const setHandler = (inputStartValue: number, inputMaxValue: number) => {
        props.setValue(inputStartValue, inputMaxValue)
    }

    return (

        <div className={'Container'}>
            <EditTablo startValue={props.startValue} maxValue={props.maxValue} callBack={setHandler}
                       changeStartValue={props.changeStartValue} changeMaxValue={props.changeMaxValue}
                       inputStartValue={props.inputStartValue} inputMaxValue={props.inputMaxValue}
                       changeTablo={props.changeTablo}/>
        </div>)
}