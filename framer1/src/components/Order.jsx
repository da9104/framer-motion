const Order = ({ pizza }) => {
  return (
    <div>
      <h2>Order</h2>
      <h3>Base: {pizza.base}</h3>
      <h3>Toppings:</h3>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  )
}

export default Order