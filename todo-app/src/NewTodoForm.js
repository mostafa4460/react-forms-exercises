import {useState} from "react";

const NewTodoForm = ({addTodo}) => {
    const [taskInput, setTaskInput] = useState("");
    const handleChange = e => setTaskInput(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(taskInput);
        setTaskInput("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input
                id="task"
                type="text"
                placeholder="todo"
                value={taskInput}
                onChange={handleChange} />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;