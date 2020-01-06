import React, { Component } from 'react';
import MovieClient from '../../../utils/MovieClient';
import MovieDetailsCard from '../../MovieDetailsCard';
import ListMovies from '../../ListMovies';

const API_KEY_V3 = "1797a669073ee6692129206af1164a2d";
const movieClient = new MovieClient(API_KEY_V3);
const genres = [];
const page = 1;
const defaultLanguage = "en-US";

class MovieDetails extends Component {

	constructor(props) {
		super(props);
		this.movieId = props.match.params.movieId;
		this.state = {
			movie: {},
			isLoaded: false,
			similarMovies: []
		}
	}

	getMovieDetails = async (movieId, language) => {
		try {
			const responseMovie = await movieClient.getMovieDetails(movieId, language);
			this.setState({
				movie: { ...responseMovie },
				isLoaded: true,
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	getPopularSimilarWithGenres = async (movieID, language, page) => {
		try {
			console.log("hello")
			const { results: movies } = await movieClient.getSimilarMovies(movieID, language, page);
			if (!genres.length) {
				const { genres: responseGenres } = await movieClient.getGenreList(defaultLanguage);
				genres.push(...responseGenres);
			}
			this.setState({
				similarMovies: this.state.similarMovies.slice().concat(movies)
			})
		} catch (error) {
			console.log(error.message);
		}
	}

	componentDidMount() {
		this.getMovieDetails(this.movieId, defaultLanguage);
		this.getPopularSimilarWithGenres(this.movieId, defaultLanguage, page);
	}

	render() {
		return (
			<div style={{ backgroundColor: "#edf0f5" }}>
				{this.state.isLoaded ? (<MovieDetailsCard movie={this.state.movie} />)
					: null}
				{this.state.similarMovies.length ? (
					<div>
						<h1 style={{ paddingLeft: "15px", }}>
							You May Also Like:
						</h1>
						<ListMovies movies={this.state.similarMovies}
							genres={genres}
							history={this.props.history}
						/>
					</div>
				) : null}
			</div >
		)
	}
}

export default MovieDetails;