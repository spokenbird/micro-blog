import {GOT_TITLES, GOT_POST, ADD_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST, UPDATE_VOTES} from './actionTypes';

const INITIAL_STATE = {
  titles: [],
  posts: {}
}

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GOT_TITLES:
      return {
        titles: action.payload,
        posts: state.posts
      }
    case GOT_POST:
        let gotPost = {...state.posts}
        gotPost[action.payload.id] = action.payload
      return {
        titles: state.titles,
        posts: gotPost
      }
    case ADD_POST:
      let addedPost = {...state.posts}
      addedPost[action.payload.id] = action.payload
      addedPost[action.payload.id].comments = [];
      return {
        titles: state.titles,
        posts: addedPost
      }
    case EDIT_POST:
      let editPost = {...state.posts}
      let oldComments = editPost[action.payload.id].comments
      editPost[action.payload.id] = action.payload
      editPost[action.payload.id].comments = oldComments
      return {
        titles: state.titles,
        posts: editPost
      }
    case DELETE_POST:
      let deletedPost = {...state.posts}
      delete deletedPost[action.payload]
        return {
          titles: state.titles,
          posts: deletedPost
        }
    case ADD_COMMENT:
      let addedComment = {...state.posts}
      addedComment[action.payload.postId].comments.push(action.payload.comment);
      return {
        titles: state.titles,
        posts: addedComment
      }
    case DELETE_COMMENT:
        let deletedComment = {...state.posts}
        deletedComment[action.payload.postId].comments = deletedComment[action.payload.postId].comments.filter(c => c.id !== action.payload.commentId)
          return {
            titles: state.titles,
            posts: deletedComment
          }
    case UPDATE_VOTES:
      let updatedPost = [...state.titles]
      let index = updatedPost.findIndex(p => p.id === action.payload.postId)
      updatedPost[index].votes = action.payload.votes.votes
          return {
            titles: updatedPost,
            posts: state.posts
          }
    default:
      return state;
  }
}

export default rootReducer;