import React from 'react'
// import "../css/buttonStyle.css"

const Button = ({ name, type }) => {
    return (
        <div className="bg-gray-200 max-sm:w-full sm:w-fit px-2 py-1 border rounded-lg text-xl text-center">
            <button type={type} className='cursor-pointer'>{name}</button>
        </div>
    )
}

export default Button