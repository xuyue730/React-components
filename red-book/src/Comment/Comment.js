import React, { Component } from 'react';

class Comment extends Component {
	render() {
		return (
			<div className="comment">
				<div className="comment-user">
					<span>{this.props.comment.username} </span>：
				</div>
				<p>{this.props.comment.content}</p>
			</div>
		);
	}
}
// 根据父组件传入的数据，显示用户名，评论内容

export default Comment;
