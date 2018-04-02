import React,{ Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
    // 设置默认的props属性值
    static defaultProps = {
        comments: []
    }
    // this.props，来自父组件,默认的props未起作用,循环调用列表组件传入数据，父组件传入本组件的数据（comment是个数组，每一项包含username,content两个属性）
    render(){
        return (<div>
            {this.props.comments.map((comment, i) =><Comment comment={comment} key={i} />)}
        </div>)
    }
}
export default CommentList;