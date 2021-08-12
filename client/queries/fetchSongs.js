import gql from "graphql-tag";

export const songsList = gql`
  {
    songs {
      title
      id
    }
  }
`;

export const addSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
`;

export const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;