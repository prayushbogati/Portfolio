import React from 'react'
// import "../css/buttonStyle.css"

const Button = ({ name, type }) => {
    return (
        <div className="cursor-pointer bg-gray-200 w-fit p-1 border rounded-lg text-xl">
            <button type={type}>{name}</button>
        </div>
    )
}

export default Button