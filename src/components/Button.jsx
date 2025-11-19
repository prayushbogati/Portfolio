import React from 'react'
import "./buttonStyle.css"

const Button = ({ name, type }) => {
    return (
        <div className="button">
            <button type={type} className='btn'>{name}</button>
        </div>
    )
}

export default Button