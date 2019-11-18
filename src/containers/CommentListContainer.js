import { connect } from "react-redux";
import commentList from "../components/CommentList";
import { addCommentToAPI, deleteCommentFromAPI, addComment,
  deleteComment } from '../actionCreators';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  addComment, deleteComment, addCommentToAPI, deleteCommentFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(commentList)