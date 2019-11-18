import React from 'react';
import PostForm from '../containers/PostFormContainer';
import CommentListContainer from '../containers/CommentListContainer';
import VotesContainer from '../containers/VotesContainer';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      loading: true
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    if (!this.props.posts[this.props.id]) {
      await this.props.getPostFromAPI(this.props.id);
    }
    this.setState({loading: false});
  }

  handleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleDelete() {
    this.props.deletePostFromAPI(this.props.id);
    this.props.history.push('/')
  }

  render() {
    let id = parseInt(this.props.id)
    return (
      this.state.loading ? <div>'loading'</div> :
      <div>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <VotesContainer id={id}/>
        {this.state.editing ? 
        <PostForm editing={true} updateEdit={this.handleEdit} id={this.props.posts[id].id} title={this.props.posts[id].title} description={this.props.posts[id].description} body={this.props.posts[id].body}/> : 
        <div>
        <div>
          <h3>{this.props.posts[id].title}</h3>
          <h5>{this.props.posts[id].description}</h5>
          <p>{this.props.posts[id].body}</p>
        </div>
        <CommentListContainer postId={id} />
        </div>
        }
      </div>
    )
  }
}

export default PostView;