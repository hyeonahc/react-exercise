import React, { useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      value: 'to do',
      checked: false,
    },
  ]);

  const nextId = useRef(2);

  const onInsert = value => {
    console.log(value);
    const nextTodo = {
      id: nextId.current,
      value: value,
      checked: false,
    };
    setTodos(todos.concat(nextTodo));
    nextId.current += 1;
  };

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
