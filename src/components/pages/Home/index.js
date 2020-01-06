import React, { Component } from 'react';
import MovieClient from '../../../utils/MovieClient';
import { Button } from '@material-ui/core';
import ListMovies from '../../ListMovies';

const API_KEY_V3 = "1797a669073ee6692129206af1164a2d";
const movieClient = new MovieClient(API_KEY_V3);
const genres = [];
const defaultLanguage = "en-US";

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movies: [],
			isLoaded: false,
			pages: 0,
		}
	}

	getPopularMoviesWithGenres = async (options) => {
		try {
			const { page, results: movies } = await movieClient.getPopularMovies(options);
			if (!genres.length) {
				const { genres: responseGenres } = await movieClient.getGenreList(defaultLanguage);
				genres.push(...responseGenres);
			}
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
			language: defaultLanguage,
			page: this.state.pages + 1,
			region: "",
		}
	}

	componentDidMount() {
		this.getPopularMoviesWithGenres(this.getDafaultOptions());
	}

	navigateToMovie = (movieId) => () => {
		this.props.history.push(`/movie/${movieId}`);
	}

	render() {
		return (
			<div>
				{this.state.movies.length ? (
					<ListMovies movies={this.state.movies}
						genres={genres}
						history={this.props.history}
					/>) : null
				}
				<Button variant="contained"
					color="primary"
					size="large"
					fullWidth={true}
					style={{ marginTop: "10px", marginBottom: "10px" }}
					onClick={() => this.getPopularMoviesWithGenres(this.getDafaultOptions())}
				>
					Get more
				</Button>
			</div>
		)
	}
}

export default Home;