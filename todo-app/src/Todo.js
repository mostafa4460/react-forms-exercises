const Todo = ({task, removeTodo}) => (
    <div>
        <p>{task}</p>
        <button onClick={removeTodo}>X</button>
    </div>
);

export default Todo;