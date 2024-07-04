import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

 function App() {
  const [todo, setTodo] = useState([]);
//   (async function(){
//   let dbtodo = await fetch("http://localhost:3000/todo");
//   dbtodo = await dbtodo.json();
//   setTodo(dbtodo.allTodos)
// })();
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos = {todo}></Todos>
    </div>
  );
}

export default App;
