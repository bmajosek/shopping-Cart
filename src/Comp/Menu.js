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
          <Link to='/'>Home</Link>
          <Link to='/cart'>Ordered: {amountOfAll} Cart</Link>
        </nav>
    </div>
  )
}

export default Menu