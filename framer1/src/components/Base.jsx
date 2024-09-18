import { Link } from "react-router-dom"
const Base = ({ addBase, pizza }) => {
  const bases = ['classic', 'thin & crispy', 'thick crust']

  return (
    <div className="base container">
      <h2>Step 1: Choose Your Base</h2>
      <ul>
        { bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <li key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
            </li>
          ) 
        })}
      </ul>

        {pizza.base && (
            <div>
                <Link to='/toppings'>
                    <button>Next</button>
                </Link>
            </div>
        )}

    </div>
  )
}   

export default Base