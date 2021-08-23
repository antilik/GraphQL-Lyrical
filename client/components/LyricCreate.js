import React, { Component } from "react";
import { graphql } from "react-apollo";

import { addLyric } from "../queries/fetchSongs";

import "./LyricCreate.css";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  onSubmitFunc(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId,
        },
      })
      .then(() => this.setState({ content: "" }))
      .catch((e) => console.log("e: ", e));
  }

  render() {
    return (
      <form className="form-lyrics" onSubmit={(e) => this.onSubmitFunc(e)}>
        <label>Add a Lyric</label>
        <input
          className="input-add-lyric"
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}

export default graphql(addLyric)(LyricCreate);
