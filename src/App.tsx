import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import ListDisplay from './components/ListDisplay';
interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ListDisplay todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
