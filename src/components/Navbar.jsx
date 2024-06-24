import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
  return (
    <div>
        <h2>Your current count: {count}</h2>
    </div>
  )
}

export default Navbar
