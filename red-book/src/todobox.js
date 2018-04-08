import React,{ Component } from "react";
import TodoList from "./TodoList";
import AddTodoItem from "./AddTodoItem";
import { Row,Col,Icon,Button } from "antd";

export default class TodoBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    "id": "1",
                    "task": "做一个TodoList Demo",
                    "complete": "false"
                }, {
                    "id": "2",
                    "task": "学习ES6",
                    "complete": "false"
                }, {
                    "id": "3",
                    "task": "Hello React",
                    "complete": "true"
                }, {
                    "id": "4",
                    "task": "找工作",
                    "complete": "false"
                }
            ]
        }
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
        // console.log(this.state);
    }

    generateGUID(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }
    
    handleToggleComplete(taskId){
        let data = this.state.data;
        for (let item of data) {
            if (item.id ===taskId) {
                item.complete = item.complate === "true"?"false":"true"
            }
        }
        this.setState({data});
    }

    handleTaskDelete(taskId){
        let data = this.state.data;
        data = data.filter(task=>task.id!==taskId);
        this.setState({data});
    }

    handleAddTodoItem(task){
        let newItem = {
            id:this.generateGUID(),
            task,
            complete:"false"
        }
        // console.log(this.generateGUID())
        // console.log(task)
        let data = this.state.data;
        data = data.concat([newItem]);
        this.setState({data});
    }

    render(){
        return (
            <div>
                <div className="well">
                    <h1 className="text-center">React TodoList</h1>
                    <TodoList data={this.state.data} toggleComplete={this.handleToggleComplete} deleteTask={this.handleTaskDelete}/>
                    <AddTodoItem saveNewItem={this.handleAddTodoItem}/>
                </div>
            </div>
        )
    }
}