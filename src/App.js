import React, {useState} from 'react';
import Input from "./Components/Input.js";
import Box from "./Components/Box.js";

function App() {
  const [todo,setTodo]= useState([]);

  const removeTodo = (id) => {
    console.log(id);
    const newTodo = todo.filter(
      (d, index) => {
        if(index !== id){
          return true;
        }else {
          return false;
        }
      }
    )
    setTodo(newTodo); // state update

  }

  const addToDoHandler = (item) => {
    // console.log(item);
    setTodo(
      [...todo,
      {
        item,
        time: new Date().toLocaleTimeString()
      }
    ]
    )
  }

  return (
    <div className="bg-sky-100 h-screen p-10 flex items-center justify-center ">
      <div className="max w-[750px] min-h-[550px] shadow-2xl bg-white">
      <Input handler ={addToDoHandler}  />
      <Box data= {todo} removeHandler={removeTodo}/>
     
      </div>
    </div>
   
  );
}
export default App;
