import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body,
      editing: this.props.editing
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
    evt.preventDefault()
    if (this.state.editing) {
      await this.props.updatePostToAPI(this.props.id, this.state.title, this.state.description, this.state.body)
      this.props.updateEdit();
    } else {
      await this.props.addPostToAPI(this.state.title, this.state.description, this.state.body)
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="title">Title</label>
          <input type="text"
            className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="" value={this.state.title}/>
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input type="text"
            className="form-control" name="description" id="description" aria-describedby="helpId" placeholder="" value={this.state.description}/>
        </div>
        <div className="form-group">
          <label for="body">Body</label>
          <textarea className="form-control" name="body" id="body" rows="3" value={this.state.body}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default PostForm;