import React, {Component} from 'react';
import './App.css';
import tasks from './samples/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Post from './components/Post'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';  

class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id : this.state.tasks.length
    }
    this.setState({
      // A lo que ya tenía agreguele esto
      tasks: [...this.state.tasks, newTask]
    })

  }
  
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks:newTasks})
  }


  deleteTask = (id) => {
    // filtra en una nueva lista aquellos que no tengan ese ID
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }


  render(){


    return <div>

      
      <Router>


        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>

        
        <Route exact path="/" render={()=> {

          return <div>
            <TaskForm addTask={this.addTask}/>
            <Tasks 
              tasks = {this.state.tasks} 
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone}
            />
          </div>
          
        }}/>


        <Route path="/posts" component={Post}/>

      </Router>
    </div>
  }
}

export default App;