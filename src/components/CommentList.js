import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.addCommentToAPI(this.state.text, this.props.postId);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <h5>Comments</h5>
        <div>
    {this.props.posts[this.props.postId].comments.map(c => <Comment id={c.id} text={c.text} deleteComment={() => this.props.deleteCommentFromAPI(c.id, this.props.postId)} />)}
        </div>
        <div>
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="text">New Comment:</label>
              <input type="text"
                className="form-control" name="text" id="text" aria-describedby="helpId" placeholder="What to add to the conversation?" value={this.state.text} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CommentList;