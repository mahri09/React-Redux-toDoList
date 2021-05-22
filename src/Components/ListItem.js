import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInput: this.props.message,
      editable: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(e){
    console.log(e.target.innerHTML);
    this.setState({
      itemInput: e.target.innerHTML
    })
  }

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.updateItem();
    }
  }

  updateItem(){
    this.setState({
      editable: !this.state.editable
    });
    // console.log(this.state.itemInput)
    this.props.editMessage(this.props.key, this.props.message)
  }

  deleteItem(){
    this.props.deleteMessage(this.props.key)
  }

  render() {
    return (
      <div className="list-group-item list-group-item-action d-flex justify-content-between">
        <span
          contentEditable={this.state.editable} 
          value={this.state.itemInput}
          onInput={this.itemInputChange}
          onKeyPress={this.handleKeyPress}
        >
          {this.props.message}
        </span>

        <div className="btn-group btn-group-sm" role="group">
          <button
            className="btn btn-success mx-2"
            type="button"
            onClick={this.updateItem}
          >
            Rename
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={this.deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
