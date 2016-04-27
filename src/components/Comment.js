import React from 'react';
import marked from 'marked';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  rawMarkup () {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup }
  }

  render () {
    return (
      <section>
        <h2>{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </section>
    )
  }
}

export default Comment;
