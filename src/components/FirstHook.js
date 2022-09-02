import React, {useState} from 'react'

export default function FirstHook() {
    const initialCount=0
    const [count, setCount] = useState(initialCount)

    const incrementbyfive =() =>{
        for(let i=0;i<5;i++){
            setCount(pc=>pc+1)
        }
    }
  return (
    <div>
        <h2>My count is {count}</h2>
      <button onClick={() => setCount(count+1)}>Counter INC</button>
      <button onClick={() => setCount(count-1)}>Counter DEC</button>
      <button onClick={() => setCount(initialCount)}>Counter RESET</button>
      <button onClick={incrementbyfive}>Counter INC by 5</button>

    </div>
  )
}
