import React,{useEffect,useState} from 'react'

export default function DemoUEHooks() {
    const [count,setCount] =useState(0)

    useEffect(()=>{
        document.title = `Counter is ${count}`
    }

    )

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Counter is {count}</button>
    </div>
  )
}
