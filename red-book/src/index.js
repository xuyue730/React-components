import React,{ Component } from "react";
import ReactDOM from "react-dom";
// Comment
import CommentApp from './Comment/CommentApp';
import "./Comment/index.css";
// todoList
import TodoBox from "./todobox";
import "./index.css";

// temperature
import Calculator from './Temperature/Calculator';

export default class Index extends Component {
    constructor(){
        super();

    };

    render(){
        return(
            <div>
                <TodoBox />
                <CommentApp/>
                <Calculator/>
            </div>
        )
    }
}

ReactDOM.render(<Index />,document.getElementById("root"));