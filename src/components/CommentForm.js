import React from 'react';

class CommentForm extends React.Component {

  constructor () {
    super();
    this.state = { name: '', comment: ''};
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange (e) {
    this.setState({name: e.target.value});
  }

  handleCommentChange (e) {
    this.setState({comment: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    let author = this.state.name.trim();
    let comment = this.state.comment.trim();
    if(!comment || !author) {
      alert('escriba su nombre y el comentario');
      return;
    }
    this.props.onCommentSubmit({author: author, text: comment});
    this.setState({ name: '', comment: ''});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={this.state.name}
          onChange={this.handleAuthorChange}>
        </input>
        <input
          type="text"
          placeholder="su comentario"
          value={this.state.comment}
          onChange={this.handleCommentChange}>
        </input>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default CommentForm;
