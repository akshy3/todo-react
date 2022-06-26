import React, {useEffect, useState} from 'react'
import Addtask from './Addtask'
import Task from './Task'

function Tasklist() {

  const [data, setData] = useState([{id: "1",title: "Clean kitchen"},{id: "2",title: "Watch Tv"}])
  useEffect(() => {
    
  

  }, [])
  
  return (
    <div>
      {data.map((val)=>{
        return(<>
        <Task val={val} key={val.id}/>
        </>)
      })}
        <Addtask data={data} setData={setData}/>
    </div>
  )
}

export default Tasklist