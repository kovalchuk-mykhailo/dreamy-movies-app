import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MovieClient from '../../../utils/MovieClient';
import MovieCard from '../../MovieCard';
import { Button } from '@material-ui/core';

const API_KEY_V3 = "1797a669073ee6692129206af1164a2d";
const client = new MovieClient(API_KEY_V3);

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movies: [],
			isLoaded: false,
			pages: 0,
		}
	}

	getPopularMovies = async (options) => {
		try {
			const { page, results: movies } = await client.getPopularMovies(options);
			this.setState({
				movies: this.state.movies.slice().concat(movies),
				isLoaded: true,
				pages: page,
			})
		} catch (error) {
			console.log(error.message);
		}
	}

	getDafaultOptions = () => {
		return {
			language: "",
			page: this.state.pages + 1,
			region: "",
		}
	}

	componentDidMount() {
		this.getPopularMovies(this.getDafaultOptions());
	}

	navigateToMovie = (movieId) => () => {
		this.props.history.push(`/movie/${movieId}`);
	}

	render() {
		return (
			<div>
				{this.state.movies && (
					<div style={{ backgroundColor: "#edf0f5" }}>
						<Grid container spacing={2} style={{ padding: 20 }}>
							{this.state.movies.map(currentMovie => (
								<Grid key={currentMovie.id}
									item xs={12} sm={6} lg={4} xl={3}
								>
									<MovieCard movie={currentMovie} handleClick={this.navigateToMovie(currentMovie.id)} />
								</Grid>
							))}
						</Grid>
					</div>
				)}
				<Button variant="contained"
					color="primary"
					size="large"
					fullWidth="true"
					onClick={() => this.getPopularMovies(this.getDafaultOptions())}
				>
					Get more
				</Button>
			</div>
		)
	}
}

export default Home;