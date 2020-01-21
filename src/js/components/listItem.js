import React from 'react';

export default class ListItem extends React.Component{

  onChangeCheckBox(){
    this.props.completeTodo(event.target.value);
  }

  onClickDeleteButton(event){
    this.props.deleteTodo(this.props.data.id);
  }
  render(){
    return(
      <li className ="todo-list-item" >
        <input type="checkbox"
          onChange={this.onChangeCheckBox.bind(this)}
          value ={this.props.data.id}
        />
        {this.props.data.label}
        <button className="delete-button"
          onClick={this.onClickDeleteButton.bind(this)}>×</button>
        </li>
    )
  }
}
