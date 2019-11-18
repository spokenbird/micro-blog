import { connect } from "react-redux";
import {getPostFromAPI, deletePostFromAPI, gotPost, 
  gotTitles, 
  addPost, 
  editPost, 
  addComment, 
  deleteComment, 
  deletePost} from '../actionCreators';
import PostView from '../components/PostView';

function mapStateToProps(state, ownProps) {
  return {
    id: parseInt(ownProps.match.params.postId),
    posts: state.posts
  }
}

const mapDispatchToProps = {
  getPostFromAPI, deletePostFromAPI, gotPost, gotTitles, addPost, editPost, addComment, deleteComment, deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView)