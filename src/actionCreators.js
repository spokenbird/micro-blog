import axios from "axios";
import {
  GOT_POST,
  GOT_TITLES,
  ADD_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  UPDATE_VOTES
} from './actionTypes';

const BASE_URL = 'http://localhost:5000'

// action creators

function gotPost(post) {
  return {
    type: GOT_POST,
    payload: post
  }
}

function gotTitles(titles) {
  return {
    type: GOT_TITLES,
    payload: titles
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}

function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  }
}

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    payload: { postId, comment }
  }
}

function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    payload: { commentId, postId }
  }
}

function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId
  }
}

function updateVotes(postId, votes) {
  return {
    type: UPDATE_VOTES,
    payload: { postId, votes }
  }
}

// thunks that dispatch actions created by action creators

function getTitlesFromAPI() {
  return async function (dispatch) {
    let response = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(gotTitles(response.data))
  }
}

function getPostFromAPI(postId) {
  return async function (dispatch) {
    let response = await axios.get(`${BASE_URL}/api/posts/${postId}`);
    dispatch(gotPost(response.data))
  }
}

function updatePostToAPI(postId, title, description, body) {
  return async function (dispatch) {
    let response = await axios.put(`${BASE_URL}/api/posts/${postId}`, { title, body, description });
    dispatch(editPost(response.data))
  }
}

function addPostToAPI(title, description, body) {
  return async function (dispatch) {
    let response = await axios.post(`${BASE_URL}/api/posts/`, { title, body, description });
    dispatch(addPost(response.data))
  }
}

function deletePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${id}`);
    dispatch(deletePost(id))
  }
}

function addCommentToAPI(text, postId) {
  return async function (dispatch) {
    let response = await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, { text, post_id: postId });
    dispatch(addComment(postId, response.data))
  }
}

function deleteCommentFromAPI(commentId, postId) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);
    dispatch(deleteComment(commentId, postId))
  }
}

function changeVotes(postId, direction) {
  return async function (dispatch) {
    let response = await axios.post(`/api/posts/${postId}/vote/${direction}`);
    dispatch(updateVotes(postId, response.data));
  }
}

export { deletePostFromAPI, getTitlesFromAPI, addCommentToAPI, deleteCommentFromAPI, getPostFromAPI, updatePostToAPI, addPostToAPI, changeVotes, gotPost, gotTitles, addPost, editPost, addComment, deleteComment, deletePost, updateVotes }