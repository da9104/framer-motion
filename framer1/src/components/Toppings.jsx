const Toppings = ({ addTopping, pizza }) => {
  const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes']

  return (
    <div>
      <h2>Step 2: Choose Toppings</h2>
      <ul>
        {toppings.map((topping) => (
          <li key={topping}>
            <input
              type="checkbox"
              value={topping}
              onChange={(e) => addTopping(e.target.value)}
              checked={pizza.toppings.includes(topping)}
            />
            {topping}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Toppings