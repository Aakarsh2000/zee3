import React,{useContext} from 'react'
import {UserContext} from '../App'

export default function DemoLastNode() {
    const user = useContext(UserContext)
  return (
    <div>
      DemoLastNode
      <UserContext.Consumer>
        {user=> {
            return<div>your context is {user}</div>
        }}
      </UserContext.Consumer>
    </div>
  )
}
