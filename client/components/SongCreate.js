import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
    });
  }

  render() {
    return (
      <div>
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

const addSongMutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
`;

export default graphql(addSongMutation)(SongCreate);
