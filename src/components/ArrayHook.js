import React,{useState} from 'react'

export default function ArrayHook() {
    const [items,itemsState] = useState([])

    const addingnumber=() =>{
        itemsState(
            [...items,{
                id:items.length,value: Math.floor(Math.random()*10) + 1
            }]
        )
    }
  return (
    <div>Array Hook<br></br>
      <button onClick={addingnumber}> Adding a number</button>
      <ul>
        {items.map(i=>(<li key={i.id}>{i.value} </li>))}
      </ul>
    </div>
  )
}
