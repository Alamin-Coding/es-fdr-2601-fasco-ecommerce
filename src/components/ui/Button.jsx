
const Button = ({text, onSignup}) => {
  return (
    <div>
       <button onClick={onSignup} className="cursor-pointer rounded-md bg-black px-8 py-3 text-xs text-white shadow-lg">
           {text}
          </button>
    </div>
  )
}

export default Button
