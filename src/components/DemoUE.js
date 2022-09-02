import React, { Component } from 'react'

export class DemoUE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    componentDidMount(){
        document.title=`counter is ${this.state.count}`
    }

    componentDidUpdate(){
        document.title=`counter is ${this.state.count}`
    }

  render() {
    return (
      <div> DemoUE<br></br>
        <button onClick={()=>this.setState({count : this.state.count+1})}>Inc Count</button>
        
      </div>
    )
  }
}

export default DemoUE
