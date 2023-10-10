import React from 'react';
import Check from './Check.jsx';
import {BsFillTrashFill} from 'react-icons/bs';

function Tasks({todo, todos, setTodos, toast}) {
    const completed = todo.isCompleted;

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        if(current.isCompleted) {
            current.isCompleted = false;
            toast.error("Ах ты жопа!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",});
        }else {
            current.isCompleted = true;
            toast.success("Ты молодец!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",});
        }
        setTodos(copy);
    }

    const deleteDoto = (id) => {
        const copy = [...todos];
        const newCopy = copy.filter((item) => {
            return item._id !== id;
        });
        toast.success("Ты успешно удалил задачу!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",});
        setTodos(newCopy);
    }

  return (
    <div className='w-full min-h-fit max-h-44 flex py-4 items-center px-4 border-b-2 justify-between'>
        <button className='flex gap-2 items-center max-w-3xl' onClick={() => changeTodo(todo._id)}>
            <Check isCompleted={completed}/>
            <p className={`text-white text-ms text-left font-semibold ${completed ? 'line-through' : ''}`}>{todo.title}</p>
        </button>
        <button>
            <BsFillTrashFill className='text-xl text-white hover:text-red-700 trainsition-colors ease-in-out duration-500' onClick={() => deleteDoto(todo._id)}/> 
        </button>
    </div>
  )
}

export default Tasks