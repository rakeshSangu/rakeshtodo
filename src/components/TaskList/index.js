import TaskItem from "../TaskItem";
import "./index.css"
import {Component} from "react"


class TaskList extends Component{
    deleteTodo = (id) =>{
        const {deleteTodoItem} = this.props;
        deleteTodoItem(id)
    }

    editTask = (id) => {
        const {editTodoItem} = this.props;
        editTodoItem(id)
    }

    render(){
        const {initialList} = this.props;
        return (
            <div>
                <h1 className="createTaskHeading">My<span>Tasks</span></h1>
                <ul className="listContainer">
                    {initialList.map((each) => (
                        <TaskItem id={each.id} editTask={this.editTask} deleteTodo={this.deleteTodo} task={each.task}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TaskList;