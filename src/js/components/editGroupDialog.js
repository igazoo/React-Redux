import React from 'react';

export default class EditGroupDialog extends React.Component {
constructor(props){
  super(props);

  this.state ={
    groupName: " "
  }
}

componentWillReceiveProps(nextProps){
  let _state = Object.assign({},this.state);
  _state.groupName = nextProps.group.label;
  this.setState(_state);
}

  onCancel(event){
    this.props.onCancel();
  }

  onSave(event){

    this.props.onSave(this.props.group.id,this.state.groupName);
  }

  onDelete(event){
    this.props.onDelete();
  }

  onChangeGroupName(event){
    this.setState({groupName: event.target.value});
  }

  render(){
    if(this.props.show){
    return(
      <div className ="modeal-layer">
        <div className ="dialog">
          <div className ="dialog-header">編集</div>
          <div className ="dialog-content">
            グループ名：
            <input

              type ="text"
              name ="groupName"
              className="group-text-input"
              value={this.state.groupName}
              onChange={
                this.onChangeGroupName.bind(this)
              }
              />
          </div>
          <div className ="dialog-footer">
            <button  className="cancel-button"
                onClick={this.onCancel.bind(this)}
            >キャンセル</button>
            <button className="save-button"
              onClick={this.onSave.bind(this)}
              >保存</button>

              <button className="delete-button"
                onClick={this.onDelete.bind(this)}
                >削除</button>
          </div>
        </div>
      </div>
    )
  }else{
    return(<div></div>);
  }
  }
}
