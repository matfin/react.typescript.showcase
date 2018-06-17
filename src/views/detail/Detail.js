import React, { Component } from 'react';

export default class Detail extends Component {
  render() {
    console.log('Detail rendered');
    const { content, createdAt, heading } = this.props;

    return (
      <main>
        <h1>
          {heading}
        </h1>
        <time dateTime={createdAt}>
          {createdAt}
        </time>
        <article>
          {content}
        </article>
      </main>
    );
  }
}