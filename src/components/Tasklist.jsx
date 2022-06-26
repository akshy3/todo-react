import React from 'react'
import Addtask from './Addtask'
import Task from './Task'

function Tasklist() {
  return (
    <div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Addtask />
    </div>
  )
}

export default Tasklist