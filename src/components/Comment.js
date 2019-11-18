import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteComment(this.props.id);
  }

  render() {
    return (
    <div className="Comment">
      <button onClick={this.handleClick} className="btn btn-danger">X</button>
      <span>{this.props.text}</span>
    </div>
    )
  }
}

export default Comment;