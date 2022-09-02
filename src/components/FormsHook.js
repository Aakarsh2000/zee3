import React,{useState} from 'react'

function FormsHook() {

    const [name, setName] = useState({firstname:"",lastname:""})
    const onHandleSubmit = (e) =>{
      alert(name.firstname +" "+ name.lastname)
    }
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input 
            type ="text" 
            value={name.firstname} 
            onChange={(e) => setName({...name,firstname:e.target.value})}>
        </input>
        <input 
            type ="text" 
            value={name.lastname} 
            onChange={(e) => setName({...name,lastname:e.target.value})}>
        </input>

        <button type='submit'> SUBMIT</button>
      </form>
        <h2>Your First Name is {name.firstname}</h2>
        <h2>Your Last Name is {name.lastname}</h2>


    </div>
  )
}

export default FormsHook
