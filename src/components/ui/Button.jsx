
const Button = ({text}) => {
  return (
    <div>
       <button className="cursor-pointer rounded-md bg-black px-8 py-3 text-xs text-white shadow-lg">
           {text}
          </button>
    </div>
  )
}

export default Button
