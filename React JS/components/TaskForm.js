import React, {Component} from 'react';


export default class TaskForm extends Component {


      state = {
            title : '',
            description : ''

      }

      onChange = e => {
            this.setState({
                  // Al elemento de X nombre cambiele el valor de estado
                  [e.target.name]: e.target.value
            })
      }


      onSubmit = e => {
            this.props.addTask(this.state.title, this.state.description)
            // Deje de refrescar cada vez que hace algo
            e.preventDefault();
      }

      render(){
            return(
                  <form onSubmit={this.onSubmit}>
                        <input 
                              type="text" 
                              name="title"
                              value={this.state.title}
                              placeholder="Write a task" 
                              onChange={this.onChange}/>
                        <br/>
                        <br/>

                        <textarea 
                              placeholder="Write a description" 
                              name="description"
                              value={this.state.description}
                              onChange={this.onChange}></textarea>
                        <br/>
                        <br/>
                        <input type="submit"/>
                  </form>
            )
      }
}

