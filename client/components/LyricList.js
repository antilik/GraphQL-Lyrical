import React, { Component } from "react";
import { graphql } from "react-apollo";

import { likeLyric } from "../queries/fetchSongs";

import "./LyricList.css";

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  onLikeHandler(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          __typename: "LyricType",
          id,
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics() {
    return this.props.lyrics.length ? (
      this.props.lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          <div>{content}</div>
          <div className="vote-box">
            <i
              className={`material-icons right custom-thumb-up ${
                likes ? "green" : ""
              }`}
              onClick={() => this.onLikeHandler(id, likes)}
            >
              thumb_up
            </i>
            <span className="right">{likes}</span>
          </div>
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
