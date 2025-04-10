import React from 'react'
import {useDispatch,useSelector} from "react";
import { DECREMENT, INCREMENT } from './redux/Action';
function ReduxCounter() {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.count);

  return (
    <div>
        <h1>Counter By redux</h1>
        <div>
            <h3>Count {count}</h3>
            <button onClick={()=>dispatch(INCREMENT)}>Increment</button>
            <button onClick={()=>dispatch(DECREMENT)}>Decrement</button>
        </div>
    </div>
  )
}

export default ReduxCounter