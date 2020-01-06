import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import MovieClient from "../../utils/MovieClient";

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#edf0f5",
  },
  borderBottom: {
    borderBottom: "1px solid",
    marginBottom: "2px",
  },
  raiting: {
    border: "1px solid",
    color: "black",
    backgroundColor: "gold",
    fontSize: "20px",
  },
  cardMedia: {
    maxHeight: '70vh',
    width: "100%",
  }
}

const getYearFromDateString = (dateString) => {
  return (new Date(dateString)).getFullYear()
}

function MovieDetailsCard(props) {
  const { title, poster_path, genres, overview, vote_average, release_date } = props.movie;
  const releaseYear = getYearFromDateString(release_date);
  const genresNames = genres.map(genre => genre.name).join("/");
  const url = MovieClient.imageBaseUrl.concat(poster_path);

  return (
    <Grid container spacing={2} style={styles.container}>
      <Grid item xs={12} sm={5} lg={4} xl={4}>
        <Card>
          <CardMedia
            component="img"
            image={url}
            title={title}
            style={styles.cardMedia}
          />
        </Card>
      </Grid>
      <Grid key={2}
        item xs={12} sm={7} lg={8} xl={8}
      >
        <CardContent>
          <Typography gutterBottom variant="h3" >
            {title}
          </Typography>
          <Typography variant="h6">
            <Button variant="contained" style={styles.raiting} disabled>
              {vote_average}
            </Button>
          </Typography>
          <Typography variant="body1" style={styles.borderBottom}>
            <b>Genres: </b>{genresNames}
          </Typography>
          <Typography variant="body1" style={styles.borderBottom}>
            <b>Description: </b>{overview}
          </Typography>
          <Typography variant="body1" style={styles.borderBottom}>
            <b>Release year: </b>{releaseYear}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  )
}

export default MovieDetailsCard;