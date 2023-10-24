import React, { useState } from 'react'
import Axios from 'axios'

function Create() {
    const[task, setTask] = useState()
    const handleAdd = () =>{
        Axios.post('http://localhost:3001/add', {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    <div>
        <input className='book' type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
        <button className='add' type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create