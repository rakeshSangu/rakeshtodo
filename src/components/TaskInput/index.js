import "./index.css"
import {Component} from 'react'

class TaskInput extends Component{
    state = {inputTask: ""};
    onChangeInputElement = (event) => {
        this.setState({inputTask: event.target.value})
    }

    saveButtonClicked = () => {
        const {saveTodo} = this.props;
        const {inputTask} = this.state;
        saveTodo(inputTask);
        this.setState({inputTask: ""})
    }


    render(){
        const {inputTask} = this.state;
        return (
            <div>
                <h1 className="createTaskHeading">Create<span>Tasks</span></h1>
                <div className="inputContainer">
                    <input value={inputTask} onChange={this.onChangeInputElement} placeholder="Enter The Task" className="inputElement"/>
                    <button onClick={this.saveButtonClicked} className="saveButton">SAVE</button> 
                </div>
            </div>
    
        )
    }
}

export default TaskInput;