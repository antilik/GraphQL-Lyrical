import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import "./SongList.css";

class SongList extends Component {
  renderSongs() {
    return (this.props.data.songs || []).map((song) => {
      return (
        <li key={song.id} className="song-list__item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.loading ? (
          "Loading"
        ) : (
          <ul className="song-list__container">{this.renderSongs()}</ul>
        )}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
