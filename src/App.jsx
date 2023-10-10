import { useState } from 'react';
import './App.css';
import Input from './components/input/input.jsx';
import Tasks from './components/tasks/tasks.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = [
]

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className='w-screen h-screen bg-gray-800 flex items-center justify-center flex-col gap-5 px-10'>
      <ToastContainer/>
      <h1 className='text-xl font-bold text-white'>
        TODO FOR TRAIN
      </h1>
      <div className='w-full h-14 bg-gray-900 rounded-2xl flex items-center'>
        <Input setTodos={setTodos} todos={todos} toast={toast}/>
      </div>
      <div className='w-full h-96 bg-gray-900 rounded-2xl overflow-y-auto'>
        {todos.map(todo => (
            <Tasks key={todo._id} todo={todo} todos={todos} setTodos={setTodos} toast={toast}/>
        ))}
      </div>
    </div>
  );
}

export default App;
