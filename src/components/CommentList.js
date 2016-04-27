import React    from 'react';
import Comment  from './Comment';

class CommentList extends React.Component {
  render () {
    return (
      <section>
        {
          this.props.comments.map((comment) => {
            return (
              <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
            )
          })
        }
      </section>
    )
  }
}

export default CommentList;
