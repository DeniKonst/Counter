import React from "react";


type PropsTypeForButtons = {
    disabled: boolean
    callBack: () => void
    title: string
}

export const Buttons = (props: PropsTypeForButtons) =>
    <button className={'Buttons'} onClick={props.callBack} disabled={props.disabled}>{props.title}</button>
