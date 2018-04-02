import React,{ Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoLIst extends Component {
    constructor(){
        super();
    }

    
    render(){
        // console.log(this.props.toggleComplete);
        var taskList = this.props.data.map(
            listItem=><TodoItem 
                taskId={listItem.id}
                key={listItem.id}
                task={listItem.task}
                complete={listItem.complete}
                toggleComplete = {this.props.toggleComplete}
                deleteTask = {this.props.deleteTask}
            />
        )
        return (
            <ul className="list-group">
                {taskList}
            </ul>
        )
    }
}