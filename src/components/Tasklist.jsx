import React, { useEffect, useState } from "react";
import Addtask from "./Addtask";
import Task from "./Task";
import "./Tasklist.css"

function Tasklist() {
  const [data, setData] = useState([]);



  const deleteTask = (id) => {
    setData(prev => prev.filter(d => d.id!==id))
    console.log(data)
  }
  useEffect(() => {

    let fromlocal = localStorage.getItem("todo");
    if(fromlocal !==null){
      setData(JSON.parse(fromlocal))
    }
  }, []);
  useEffect(() => {

   localStorage.setItem("todo",JSON.stringify(data));
  }, [data]);

  return (
    <div className="Tasklist">
      {
      data.length? (
      data.map((val) => {
        return <Task val={val} key={val.id} deleteTask={deleteTask}/>;
      })
      ):(
        <p className="emptytext">Type a task below to view them&darr; </p>
      )
      
      
      }
      <Addtask data={data} setData={setData} />
    </div>
  );
}

export default Tasklist;
