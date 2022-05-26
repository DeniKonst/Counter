import React from "react";

type propsTabloType = {
    point: number | null
    maxValue: number
    error: string | null
}

export const Tablo = (props: propsTabloType) => {
    const tabloValue = props.point === null ? 'press set' : props.point
if (props.error) {
    return <div className={'Tablo'}>{props.error}</div>
}
else {
        return (
            <div className={props.point === props.maxValue ? 'TabloEnd' : 'Tablo'}>{tabloValue}</div>
        )}

}


