import React from 'react';
import { connect } from 'react-redux';
import {addToDo, editToDo, deleteToDo} from './actions/todoActions';
import AddToDoList from './Components/AddToDoList';

export const App = (props) => {
  return (
    <div>
      <AddToDoList messages={props.message} addMessage={props.addMessage} editMessage={props.editMessage} deleteMessage={props.deleteMessage}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {message: state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage : (message) => {
      dispatch(addToDo(message));
    },
    editMessage: (index, message) =>{
      dispatch(editToDo(index, message))
    },
    deleteMessage : (index) => {
      dispatch(deleteToDo(index))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
