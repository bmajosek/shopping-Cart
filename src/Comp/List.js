import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
function List() {
    const [products, setProducts] = useState([
        {
            name: 'cupcake',
            price: 15
        },
        {
            name: 'bread',
            price: 20
        },
        {
            name: 'bun',
            price: 10
        }])
    const dispatch = useDispatch();
    const addToCart = (elem) =>{
        dispatch({ type: elem });
    }
  return (
    <div className='Products'>
        <h3>Make order &#128512;</h3>
        {products.map((elem, i) =>{
            return <div key={i} className='Product'>
                    <p>{elem.name}</p>
                    <button onClick={() => addToCart(elem.name)}>buy {elem.price}$</button>
                </div>
        })}
    </div>
  )
}

export default List