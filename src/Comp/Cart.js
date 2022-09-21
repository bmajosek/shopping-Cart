import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { products } from '../Variables/Variables'
function Cart() {
  
  [products[0].amount, products[1].amount, products[2].amount] = useSelector(state => {return [state.bun, state.cupcake, state.bread]});
  const dispatch = useDispatch();
    const addToCart = (elem) =>{
        dispatch({ type: 'add', payload: elem});
    }
    const deleteFromCart = (elem) =>{
      dispatch({ type: 'delete', payload: elem});
    }
    const removeFromCart = (elem) =>{
      dispatch({ type: 'remove', payload: elem});
    }
    const price = products.reduce((result, elem) =>{
      return result + elem.amount*elem.price;
    }, 0)
  return (
    <div className='Cart'>
      <h3>Your order: {price}$</h3>
      {products.map((elem,i) =>{
        return <div key={i} className='Product'>
        <p>{elem.name}</p>
        <div className='Amount'>
          <button onClick={() => deleteFromCart(elem.name)}>-</button>
          <p>{elem.amount}</p>
          <button onClick={() => addToCart(elem.name)}>+</button>
        </div>
        <div className='Amount'>
          <p>{elem.amount*elem.price}$</p>
          <button onClick={() => removeFromCart(elem.name)}>Remove</button>
        </div>
        </div>
      })}
      <button>BUY</button>
    </div>
  )
}

export default Cart