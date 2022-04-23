import React from "react";

type propsTabloType = {
    point: number
}

export const Tablo = (props: propsTabloType) => <div
    className={props.point === 5 ? 'TabloEnd' : 'Tablo'}> {props.point} </div>


