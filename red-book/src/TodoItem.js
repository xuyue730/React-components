import React,{ Component } from "react";
import { Row,Col,Checkbox,Button } from "antd";

export default class TodoItem extends Component {
    constructor(){
        super();
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    toggleComplete(e){
        this.props.toggleComplete(this.props.taskId);
        // console.log(e.target);
    }
    
    deleteTask(){
        this.props.deleteTask(this.props.taskId);
    }

    render(){
        let task = this.props.task;
        let itemChecked
        if (this.props.complete ==="true") {
            task = <del>{task}</del>
            itemChecked = true;
        }else{
            itemChecked = false;
        }
        return (
            <li className="list-group-item">
                <Row>
                    <Col span={12}>
                        <Checkbox checked={itemChecked} onChange={this.toggleComplete}/> {task}
                    </Col>
                    <Col span={12}>
                        <Button type="danger" className="pull-right" onClick={this.deleteTask}>删除</Button>
                    </Col>
                </Row>
            </li>
        )
    }
}