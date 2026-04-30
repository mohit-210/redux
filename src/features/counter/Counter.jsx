import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import './Counter.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(5)

  return (
    <div className="counter-container">
      <h1>Redux Counter</h1>

      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      <div className="button-group">
        <button
          className="btn btn-decrement"
          onClick={() => dispatch(decrement())}
        >
          - Decrement
        </button>

        <button
          className="btn btn-reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>

        <button
          className="btn btn-increment"
          onClick={() => dispatch(increment())}
        >
          + Increment
        </button>
      </div>

      <div className="custom-amount">
        <label>
          Custom Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
            min="0"
          />
        </label>
        <button
          className="btn btn-custom"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}
