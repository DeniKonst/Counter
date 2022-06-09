import React from "react";
import './App.css';
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {Counter} from "./counter/Counter";
import {EditTablo} from "./setParamCounter/EditTablo";


export const App = () => {

    let change = useSelector<AppStateType, boolean>(state => state.counter.changeTablo)

    if (change) {
        return <div className="App">
            <Counter/>
        </div>
    } else {
        return <div className="App">
            <div className={'Container'}>
                <EditTablo/>
            </div>
        </div>

    }


}


