import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./store";

function Counter() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={()=>dispatch(inc())}>+</button>
      <button onClick={()=>dispatch(dec())}>-</button>
    </div>
  );
}

export default Counter;
