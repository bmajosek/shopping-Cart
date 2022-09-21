import React from 'react'
import { useDispatch } from 'react-redux'
import { products } from '../Variables/Variables'
function List() {
    
    const dispatch = useDispatch();
    const addToCart = (elem) =>{
        dispatch({ type: 'add' , payload: elem});
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