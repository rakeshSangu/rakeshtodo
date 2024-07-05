import "./index.css"





const TaskItem = (props) => {
    const {task,id,deleteTodo,editTask} = props;

    const deleteButtonClicked = () => {
        deleteTodo(id)
    }

    const editButtonClicked = () => {
        editTask(id)
    }

    return (
        <li className="taskContainer">
            <p className="taskPara">{task}</p>
                <div className="iconContainer">
                    <i onClick={editButtonClicked} className="fas fa-edit editIcon"></i>
                    <i onClick={deleteButtonClicked} class="fa-solid fa-trash deleteIcon"></i>
                </div>
        </li>
    )
}

export default TaskItem;