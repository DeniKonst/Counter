import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';


function App() {
    const startValue = 0;
    const maxValue =5;

    let [point, setPoint] = useState<number>(startValue);

    const increment = (num: number) => {
        if (point < maxValue)
            setPoint(point + num)
    }

    const reset = () => {
        setPoint(startValue)
    }

    return (
        <div className="App">
            <Counter point={point} increment={increment} reset={reset}/>

        </div>
    );
}

export default App;
