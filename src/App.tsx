import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './counter/Counter';
import {EditCounter} from "./editCounter/EditCounter";


function App() {
    let initStartValue = 0;
    let initMaxValue = 5;

    let [point, setPoint] = useState<number | null>(null);
    let [startValue, setStartValue] = useState<number>(initStartValue);
    let [maxValue, setMaxValue] = useState<number>(initMaxValue);
    let [inputStartValue, setInputStartValue] = useState(0)
    let [inputMaxValue, setInputMaxValue] = useState(5)
    let [isChangeTablo, setIsChangeTablo] = useState(false)


    useEffect(() => {
        let ValuePoint = localStorage.getItem('counterValue')
        if (ValuePoint !== null) {
            let SavePoint = JSON.parse(ValuePoint)
            setPoint(SavePoint)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(point))
    }, [point])

    useEffect(() => {
        let startValuePoint = localStorage.getItem('counterStartValue')
        if (startValuePoint !== null) {
            let SaveStartValuePoint = JSON.parse(startValuePoint)
            setInputStartValue(SaveStartValuePoint)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(inputStartValue))
    }, [inputStartValue])

    useEffect(() => {
        let maxValuePoint = localStorage.getItem('counterMaxValue')
        if (maxValuePoint !== null) {
            let SaveMaxValuePoint = JSON.parse(maxValuePoint)
            setInputMaxValue(SaveMaxValuePoint)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(inputMaxValue))
    }, [inputMaxValue])


    const setValue = (inputStartValue: number, inputMaxValue: number) => {
        setPoint(inputStartValue)
        setStartValue(inputStartValue)
        setMaxValue(inputMaxValue)
    }

    const changeTablo = () => {
        setIsChangeTablo(!isChangeTablo)
    }

    const changeStartValue = (inputStartValue: number) => {
        setInputStartValue(inputStartValue)
    }
    const changeMaxValue = (inputMaxValue: number) => {
        setInputMaxValue(inputMaxValue)
    }

    const increment = (num: number) => {
        if (point !== null && point < maxValue) {
            let totalPoint = point + num
            setPoint(totalPoint)
        }
    }

    const reset = () => {
        setPoint(startValue)

    }


    if (isChangeTablo) {
        return (
            <div className="App">
                <EditCounter startValue={startValue} maxValue={maxValue} setValue={setValue}
                             changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}
                             inputStartValue={inputStartValue} inputMaxValue={inputMaxValue}
                             changeTablo={changeTablo} />
            </div>)}
    else {
        return (
            <div className="App">
                <Counter point={point} increment={increment} reset={reset} maxValue={maxValue} startValue={startValue} inputStartValue={inputStartValue} inputMaxValue={inputMaxValue}
                         changeTablo={changeTablo}/>
            </div>

        )
    }
}

export default App;
