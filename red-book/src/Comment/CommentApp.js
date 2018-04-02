import React,{ Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends Component {
    // 组件初始化，设置state的值为空，只有在constructor中才能直接设置state的值
	constructor() {
		super();
		this.state = {
			comments: [
                {username: 'Jerry', content: 'Hello'},
                {username: 'Tomy', content: 'World'},
                {username: 'Lucy', content: 'Good'}
            ],
        };
        // console.log(super());
        // super中包含： props、context、refs、updater、state
	}
	handleSubmitComment=(comment)=> {
		// debugger;
        if (!comment) return;
		if (!comment.username) return alert('请输入用户名');
		if (!comment.content) return alert('请输入评论内容');
		this.state.comments.push(comment);
		this.setState({ comments: this.state.comments });
		console.log(comment);
	}
	render() {
		return (<div className="wrapper">
            <CommentInput onSubmit={this.handleSubmitComment} />
            <CommentList  comments={this.state.comments}/>
        </div>);
	}
}

export default CommentApp;