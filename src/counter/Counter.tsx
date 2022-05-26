import React from 'react';
import {Buttons} from "./Buttons";
import {Tablo} from './Tablo';

type PropsType = {
    point: number | null
    maxValue: number
    startValue: number
    increment: (num: number) => void
    reset: () => void
    changeTablo: ()=> void
    inputStartValue: number
    inputMaxValue: number
}

export const Counter = (props: PropsType) => {
    let count = 1
    const incrementHandler = () => {
        props.increment(count)
    }

    const resetHandler = () => {
        props.reset()
    }

    const setHandler = () => {
        props.changeTablo()
    }

    let error=null;
    if (props.inputMaxValue <= props.inputStartValue || props.inputStartValue < 0) {
        error = 'invalid settings values'
    }

    return (

        <div className={'Container'}>
            <Tablo point={props.point} maxValue={props.maxValue} error={error}/>
            <div className={'ButtonsCSS'}>
                <Buttons title={'inc'} callBack={incrementHandler}
                         disabled={props.point === props.maxValue || props.inputMaxValue <= props.inputStartValue || props.inputStartValue < 0}/>
                <Buttons title={'reset'} callBack={resetHandler}
                         disabled={props.point === props.startValue || props.inputMaxValue <= props.inputStartValue || props.inputStartValue < 0}/>
                <Buttons title={'set'} callBack={setHandler} disabled={props.inputStartValue < 0}/>
            </div>

        </div>)
}