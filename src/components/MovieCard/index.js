import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MovieClient from '../../utils/MovieClient'

const MovieCard = ({ movie, handleClick }) => {
  const { title, poster_path, overview } = movie;
  const url = MovieClient.imageBaseUrl.concat(poster_path);
  return (
    <div>
      {movie && (
        <Card /* style={{ margin: "5px" }} */>
          <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
            image={url}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" >
              {title}
            </Typography>
            <Typography component="p">
              {overview}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"
              color="primary"
              onClick={handleClick}
            >
              Show Details
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  )
}
export default MovieCard;