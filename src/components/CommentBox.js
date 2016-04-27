import  React         from 'react';
import  CommentList   from './CommentList';
import  CommentForm   from './CommentForm';

class CommentBox extends React.Component {
  constructor () {
    super();
    this.state = { data: [] };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentWillMount() {
    fetch(this.props.url)
      .then((response) => { return response.json() })
      .then((comments) => {
        setTimeout(() => {
          this.setState({ data: comments })
        }, 2000);
      })
      .catch((err) => {
        console.log(`ocurrió algun error, ${err}`);
      })
  }

  handleCommentSubmit (comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    console.log(comment);
    comments.push(comment);
    this.setState({data: comments});
    //realizar la llamada post al server para guardar el comentario

  }

  render () {
    if (!this.state.data.length) {
      return (
        <h2>Cargando comentarios, espere...</h2>
      )
    } else {
      return (
        <section>
          <h1>Comentarios</h1>
          <CommentList comments={this.state.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </section>
      )
    }
  }
}

export default CommentBox;
