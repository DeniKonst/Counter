import React, {ChangeEvent, useState} from 'react';
import {Buttons} from "./Buttons";
import { Tablo } from './Tablo';

type PropsType = {
    point: number
    increment: (num: number) => void
    reset: () => void
}

export const Counter = (props: PropsType) => {
    let count = 1
    const incrementHandler = () => {
        props.increment(count)
    }

    const resetHandler = () => {
        props.reset()
    }
    return (

        <div className={'Container'}>
            <Tablo point={props.point}/>
            <div className={'ButtonsCSS'}>
                <Buttons title={'inc'}  callBack={incrementHandler} disabled={props.point === 5}/>
                <Buttons title={'reset'} callBack={resetHandler} disabled={props.point === 0}/>
            </div>

        </div>)
}