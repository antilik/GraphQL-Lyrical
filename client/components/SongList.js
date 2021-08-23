import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import { songsList, deleteSong } from "../queries/fetchSongs";

import "./SongList.css";

class SongList extends Component {
  deleteSongHandler(id) {
    this.props
      .mutate({
        variables: { id },
      })
      .then(() => this.props.data.refetch())
      .catch((e) => console.log("e: ", e));
  }

  renderSongs() {
    return (
      this.props.data.songs.length &&
      this.props.data.songs.map(({ id, title }) => {
        return (
          <li key={id} className="song-list__item">
            <Link to={`/songs/${id}`}>
              <span>{title}</span>
            </Link>
            <i
              onClick={() => this.deleteSongHandler(id)}
              className="material-icons right icon-transform"
            >
              delete
            </i>
          </li>
        );
      })
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="songs-container">
        <div className="songs-container__float-btn">
          <Link
            to="/songs/new"
            className="btn-floating btn-large waves-effect waves-light cyan right"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
        {data.loading ? (
          "Loading"
        ) : (
          <ul className="song-list__container">{this.renderSongs()}</ul>
        )}
      </div>
    );
  }
}

export default graphql(deleteSong)(graphql(songsList)(SongList));
