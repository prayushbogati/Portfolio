import React from 'react'
// import "../css/buttonStyle.css"

const Button = ({ name, type }) => {
    return (
        <div className="bg-gray-200 w-fit p-1 border rounded-lg text-xl">
            <button type={type} className='cursor-pointer'>{name}</button>
        </div>
    )
}

export default Button