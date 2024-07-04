import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
      <input style={{
        padding:10,
        margin:10,
      }} onChange={(e)=>{
        setTitle(e.target.value)
      }} type="text" placeholder="title" /> <br />
      
      <input style={{
        padding:10,
        margin:10,
      }} onChange={(e)=>{
        setDescription(e.target.value)
      }} type="text" placeholder="description" />
      <br />
      
        <button style={{
        padding:10,
        margin:10,
      }} onClick={async()=>{
        let response = await fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "contentType":"application/json"
            }
        })

        response = await response.json()
        alert(response.msg)
      }}>Add a Todo</button>
    </div>
  );
}
