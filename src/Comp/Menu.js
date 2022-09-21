import React from 'react'
import {
    Link
  } from "react-router-dom";
  import { useSelector } from 'react-redux'
function Menu() {
  const amountOfAll = useSelector((state) => {return (state.bun + state.bread + state.cupcake)});
  return (
    <div>
        <nav className='Menu'>
          <Link to='/'><h4>Home</h4></Link>
          <Link to='/cart'><h4>Ordered: {amountOfAll} Cart</h4></Link>
        </nav>
    </div>
  )
}

export default Menu