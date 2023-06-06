import React from 'react';
import './style.css';
import SingleTodo from './SingleTodo';
interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ListDisplay: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default ListDisplay;
