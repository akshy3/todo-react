import React, { useEffect, useState } from "react";
import Addtask from "./Addtask";
import Task from "./Task";
import "./Tasklist.css"

function Tasklist() {
  const [data, setData] = useState([
    { id: "1", title: "Clean kitchen" },
    { id: "2", title: "Watch Tv" },
  ]);

  const deleteTask = (id) => {
    setData(prev => prev.filter(d => d.id!==id))
    console.log(data)
  }
  useEffect(() => {}, []);

  return (
    <div className="Tasklist">
      {data.map((val) => {
        return <Task val={val} key={val.id} deleteTask={deleteTask}/>;
      })}
      <Addtask data={data} setData={setData} />
    </div>
  );
}

export default Tasklist;
