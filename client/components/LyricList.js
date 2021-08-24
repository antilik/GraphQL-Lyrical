import React, { Component } from "react";
import { graphql } from "react-apollo";

import { likeLyric } from "../queries/fetchSongs";

import "./LyricList.css";

class LyricList extends Component {
  constructor(props) {
    super(props);
  }
  onLikeHandler(id) {
    this.props.mutate({
      variables: { id },
    });
  }

  renderLyrics() {
    return this.props.lyrics.length ? (
      this.props.lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <i
            className={`material-icons right custom-thumb-up ${
              likes ? "green" : "red"
            }`}
            onClick={() => this.onLikeHandler(id)}
          >
            thumb_up
          </i>
        </li>
      ))
    ) : (
      <li className="collection-item">Lyric list unavailable</li>
    );
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default graphql(likeLyric)(LyricList);
