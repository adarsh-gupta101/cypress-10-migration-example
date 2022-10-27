import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  const inputRef = useRef();

  function addNewTod(newTodo) {
    let flag = 0;
    todoList.forEach((todo) => {
      if (newTodo == "" || newTodo=='') {
        flag = 1;
        // alert()
        toast.error("Please enter a valid todo");
      }
      if (todo === newTodo ) {
        console.log("Oops! You have already added this task");
        flag = 1;
      }
    });

    if (flag !=1 ) {
      setTodoList([...todoList, newTodo]);
      toast(`Todo ${newTodo} Added`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      inputRef.current.value = "";
    }
  }

  function removeTodo(event, todoremove) {
    console.log(event.detail);
    if (event.detail === 1) {
      setTodoList(todoList.filter((todo) => todo !== todoremove));
      toast(`Todo ${todoremove} removed`);
      console.log(12345678);
    }
  }

  return (
    <div>
      {/* Todo app with tailwind */}
      <ToastContainer />

      <div
        style={{
          backgroundImage:
            'url("https://www.allartclassic.com/img/Albert_Bierstadt_BIA017.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
        className='flex flex-col items-center justify-center  min-h-screen py-4'>
        <div className='flex flex-col items-center justify-center w-full max-w-md px-4 py-6 space-y-4 bg-white rounded-lg shadow-pink-300 shadow-xl'>
          <h1 className='text-2xl font-bold text-gray-900'>Todo App</h1>
          <div className='flex flex-row items-center justify-center w-full space-x-4'>
            <input
              ref={inputRef}
              data-input='todo-input'
              className='flex-1 px-4 py-2 text-gray-900 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-blue-200 focus:ring-opacity-50'
              type='text'
              placeholder='Add todo'
            />
            <button
              data-button='Add-Todo'
              onClick={() => {inputRef.current.value!="" && addNewTod(inputRef.current.value)}}
              className='px-4 py-2 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>
              Add
            </button>
          </div>
          {todoList?.map((item, key) => {
            return (
              <div
                onClick={(e) => removeTodo(e, item)}
                key={item}
                className='flex flex-col items-start justify-start w-full space-y-4'>
                <div
                  data-todo={item}
                  className='flex flex-row items-center justify-between w-full px-4 py-2 space-x-4 bg-blue-400 rounded-lg shadow-sm'>
                  <p className='text-gray-100'>{item}</p>
                </div>
              </div>
            );
          })}
                <p className="text-gray-400 bg-white text-center">Double click to remove an item</p>

        </div>{" "}
      </div>
    </div>
  );
}

export default App;
