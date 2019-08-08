import React, { Component } from 'react';

class Twitter extends Component {
  render(props) {
    return (
      <a className="twitter-share-button"
        href={`http://twitter.com/share?text=${this.props.title}&url=${this.props.url}&via=yagrawl`}
        target="_blank"
        rel="noopener noreferrer">
        Tweet
      </a>
    );
  }
}

export default Twitter;
