import React from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "../MovieCard";
import MovieClient from "../../utils/MovieClient";

const API_KEY_V3 = "1797a669073ee6692129206af1164a2d";
const movieClient = new MovieClient(API_KEY_V3);
const styles = {
  divBack: {
    backgroundColor: "#edf0f5"
  },
  container: {
    padding: 20
  },
}
function ListMovies(props) {
  const { movies, genres } = props;
  const navigateToMovie = (movieId) => () => {
    props.history.push(`/movie/${movieId}`);
  }

  return (
    <div style={styles.divBack}>
      <Grid container spacing={2} style={styles.container}>
        {movies.map(currentMovie => (
          <Grid key={currentMovie.id}
            item xs={12} sm={6} lg={4} xl={3}
          >
            <MovieCard movie={currentMovie}
              handleClick={navigateToMovie(currentMovie.id)}
              genres={movieClient.getGenresNamesByIds(genres, currentMovie.genre_ids)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ListMovies;