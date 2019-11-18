import { connect } from "react-redux";
import PostForm from '../components/PostForm';
import {updatePostToAPI, addPostToAPI, addPost, editPost} from '../actionCreators';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  updatePostToAPI, addPostToAPI, addPost, editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)