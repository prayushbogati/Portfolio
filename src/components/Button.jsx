// import "../css/buttonStyle.css"

const Button = ({ name, type }) => {
    return (
        <div className="bg-gray-200 hover:bg-gray-300 transition-all duration-200 ease-in-out cursor-pointer border rounded-lg text-lg text-center">
            <button type={type} className='cursor-pointer size-full px-2 py-1'>{name}</button>
        </div>
    )
}

export default Button