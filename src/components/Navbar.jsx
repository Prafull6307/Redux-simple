import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {
  let products = useSelector((state) => state.cart.items);
  return (
    <>
    <div className='flex justify-between items-center bg-slate-400'>
    <Link className='font-bold text-2xl' to='/'>Home</Link>
    <Link className='font-bold text-2xl' to='/cart'>Cart</Link>
    <h1 className='font-bold text-2xl'>items:{products.length}</h1>
    </div>
    </>
  )
}

export default Navbar