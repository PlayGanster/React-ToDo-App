import {useState} from 'react';

const Input = ({setTodos, todos, toast}) => {
    const [input, setInput] = useState('');

    const addTodo = (title) => {
        if(title != "") {
            const count = todos.length + 1;
            setTodos(prev => [
            ...prev,{
                _id: count,
                title: title, 
                isCompleted: false,
            }])
            toast.success("Вы успешно создали", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",});
        }else {
            toast.error("Пустое поле!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",});
        }
        setInput('');
        }

    return (
        <input type="text" value={input} className='bg-transparent w-full h-full px-5 outline-none text-white' placeholder='Создать новую задачу' onKeyPress={e=>e.key === 'Enter' && addTodo(input)} onChange={e=>{setInput(e.target.value)}} />
    )
}

export default Input