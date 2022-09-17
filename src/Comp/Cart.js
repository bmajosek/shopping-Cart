import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Cart() {
  const products = {buns: 0, breads: 0, cupcakes: 0};
  [products.buns, products.breads, products.cupcakes] = useSelector(state => {return [state.bun, state.bread, state.cupcake]});
  const price = products.buns*10+products.breads*20+products.cupcakes*15;
  const dispatch = useDispatch();
    const addToCart = (elem) =>{
        dispatch({ type: elem.slice(0,elem.length-1) });
    }
    const deleteFromCart = (elem) =>{
      dispatch({ type: 'delete'+elem.slice(0,elem.length-1) });
  }
  return (
    <div className='Cart'>
      <h3>Your order: {price}$</h3>
      {Object.keys(products).map((elem,i) =>{
        return <div key={i} className='Product'>
        <p>{elem}</p>
        <div className='Amount'>
        <button onClick={() => deleteFromCart(elem)}>-</button>
        <p>{products[elem]}</p>
        <button onClick={() => addToCart(elem)}>+</button>
        </div>
        <button>Remove</button>
        </div>
      })}
    </div>
  )
}

export default Cart