class MovieClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  static requestBaseUrl = "https://api.themoviedb.org/3";
  static imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  getApiKeyLanguageSlice = (language) => {
    return `?api_key=${this.apiKey}&language=${language}`
  }

  getApiKeyLanguagePageSlice = (language, page) => {
    return `?api_key=${this.apiKey}&language=${language}&page=${page}`
  }

  generatePopularMoviesUrl = ({ language = "en-US", page = 1 }) => {
    return `${MovieClient.requestBaseUrl}/movie/popular${this.getApiKeyLanguagePageSlice(language, page)}`
  }

  generateGenreListUrl = (language = "en-US") => {
    return `${MovieClient.requestBaseUrl}/genre/movie/list${this.getApiKeyLanguageSlice(language)}`;
  }

  generateMovieDetailsUrl = (movieId, language = "en-US") => {
    return `${MovieClient.requestBaseUrl}/movie/${movieId}${this.getApiKeyLanguageSlice(language)}`;
  }

  generateSimilarMoviesUrl = (movieId = "0", language = "en-US", page = 1) => {
    return `${MovieClient.requestBaseUrl}/movie/${movieId}/similar${this.getApiKeyLanguagePageSlice(language, page)}`
  }

  getResponseJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  }

  getGenreList = async (language) => {
    const url = this.generateGenreListUrl(language);
    return this.getResponseJson(url);
  }

  getMovieDetails = async (movieId, language) => {
    const url = this.generateMovieDetailsUrl(movieId, language);
    return this.getResponseJson(url);
  }

  getPopularMovies = async (options) => {
    const url = this.generatePopularMoviesUrl(options);
    return this.getResponseJson(url);
  }

  getSimilarMovies = async (movieID, language, page) => {
    const url = this.generateSimilarMoviesUrl(movieID, language, page);
    return this.getResponseJson(url);
  }

  getGenresNamesByIds = (genres, ids) => {
    const genreNames = ids && genres && genres
      .filter(genre => ids.includes(genre.id))
      .map(genre => genre.name)
      .join(", ");
    return genreNames;
  }

}

export default MovieClient;