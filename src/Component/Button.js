import React from 'react'

const Button = ({styleClass,value,onClick}) => {
    return (
        <>
            <button className={`${styleClass}`} onClick={onClick()}>
               {value}
            </button>
        </>
    )
}

export default Button
