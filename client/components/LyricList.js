import React, { Component } from "react";

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  renderLyrics() {
    return this.props.lyrics.length ? (
      this.props.lyrics.map(({ id, content }) => (
        <li key={id} className="collection-item">
          {content}
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

export default LyricList;
