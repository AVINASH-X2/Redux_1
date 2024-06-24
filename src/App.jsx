import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <Navbar />
      <div className="content">

        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(1.5))}>1.5</button>
      <div>
        The count is: {count}
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>2</button>
      
      </div>
    </div>
  )
}

export default App
