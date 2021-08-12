import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

import { songsList, addSong } from "../queries/fetchSongs";

import "./SongCreate.css";
class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  onSubmitFunc(e) {
    e.preventDefault();
    console.log("this.props >>>>>>>>>>", this.props);

    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: songsList }],
      })
      .then(() => hashHistory.push("/"))
      .catch((e) => console.log("e >>>>>>>>>>", e));
  }

  render() {
    return (
      <div className="song-create-container">
        <Link to="/">Back</Link>
        <h4>Create a New Song</h4>
        <form onSubmit={(e) => this.onSubmitFunc(e)}>
          <label>Song Title:</label>
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(SongCreate);
