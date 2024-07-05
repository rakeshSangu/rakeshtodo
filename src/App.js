import { tab } from '@testing-library/user-event/dist/tab.js';
import './App.css';
import TaskInput from './components/TaskInput/index.js';
import TaskList from './components/TaskList/index.js';
import {v4 as uuidv4} from 'uuid'

import {Component} from "react";

let myList = [
  {id: uuidv4(),
   task: "writing notes"
  },
  {id: uuidv4(),
  task: "coding"
  },
  {id: uuidv4(),
  task: "watching kalki"
  }
]

class App extends Component {
  state = {initialList: myList}

  saveTodo = (inputValue) => {  
      const newTaskObj = {
        id: uuidv4(),
        task: inputValue
      }
  
      this.setState((preState) => ({initialList: [...preState.initialList,newTaskObj]}))
  }

  deleteTodoItem = (id) => {
    const {initialList} = this.state;
    const filteredList = initialList.filter((each) => (
        each.id !== id
    ))
    this.setState({initialList: filteredList})
  }

  changeStateAfterEdit = (filteredList) => {
    this.setState({initialList: filteredList})
  }
  

  editTodoItem = (id) => {
    const {initialList} = this.state;
    const editContainerElement = document.getElementById("editContainerElement");
    const editInputElement = document.getElementById("editInputElement");
    editContainerElement.style.display="block"
    editInputElement.value = initialList.find((each) => each.id===id).task;
    let filteredList = initialList;
    let editedTaskIndex = filteredList.findIndex((each) => each.id===id);
    filteredList.splice(editedTaskIndex,1);
    this.setState({initialList: filteredList})
  }

  saveEditedTask = () => {
    const editInputElement = document.getElementById("editInputElement");
    const editContainerElement = document.getElementById("editContainerElement");
    const finalEditedTaskObj = {
      id: uuidv4(),
      task: editInputElement.value
    }
    const {initialList} = this.state
    this.setState({initialList: [...initialList,finalEditedTaskObj]})
    editContainerElement.style.display="none"
  }


  


  render(){
    const {initialList} = this.state;

    return (
      <div className="backgroundSection">
        <h1 className="top-heading">--- TODO ---</h1>
        <TaskInput saveTodo={this.saveTodo} />
        <div id="editContainerElement" className="editContainer">
            <p className='editPara'>Edit your Task</p>
            <div className='innerEditContainer'>
              <input id="editInputElement" className="editInputEle"></input>
              <button onClick={this.saveEditedTask} className='editSaveButton'>SAVE</button>
            </div>
            
        </div>
        <TaskList editTodoItem={this.editTodoItem} deleteTodoItem={this.deleteTodoItem} initialList={initialList} />
      </div>
    );
  }
}

export default App;
