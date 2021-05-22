import React, { Component } from 'react';
import List from './List';
import NoList from './NoList';


class AddToDoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      input: ''
    }
  }

  handleChange=(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      this.submitMessage();
    }
  }

  submitMessage=(e)=>{
    if (this.state.input.length > 1){
      this.props.addMessage(this.state.input)
    } else{
      alert('Please fill the blanket!')
    }
    this.setState({ input: " " });
  }
  
  render() {
    return (
      <div id="toDoApp" >
        <div id='container'>
          <label id="toDoTitle" htmlFor="basic-input">
            <h2 className="text-monospace ">My To Do List</h2>
          </label>
          <div id="toDoAdd" className="input-group">
            <input
              id="basic-input"
              className="form-control"
              type="text"
              placeholder="Thing to do"
              value={this.state.input}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-info ms-1"
                onClick={this.submitMessage}
              >
                Add
              </button>
            </div>
          </div>
          {this.props.messages.length > 0 ? (
            <List
              messages={this.props.messages}
              editMessage={this.props.editMessage}
              deleteMessage={this.props.deleteMessage}
            />
          ) : (
            <NoList />
          )}
        </div>
        

      </div>
    )
  }
}


export default AddToDoList;