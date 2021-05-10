import {useState} from "react";
import {v4 as uuid} from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), task: 'Walk dog'},
        {id: uuid(), task: 'Buy dog'},
        {id: uuid(), task: 'Buy dogecoin'}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = task => setTodos(todos => [...todos, {id: uuid(), task}]);
    const removeTodo = id => setTodos(todos => todos.filter(todo => todo.id !== id));
    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <Todo 
                    key={todo.id}
                    removeTodo={() => removeTodo(todo.id)} 
                    {...todo} />
            ))}
        </div>
    );
}

export default TodoList;