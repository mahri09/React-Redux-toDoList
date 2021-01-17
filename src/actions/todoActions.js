export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';

const addToDo = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const editToDo = (index, message) => {
  return {
    type: EDIT,
    index: index,
    message: message
  }
}

const deleteToDo = (index) => {
  return {
    type: DELETE,
    index: index
  }
}

export {addToDo, editToDo, deleteToDo};