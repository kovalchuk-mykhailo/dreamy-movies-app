class MovieClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  static requestBaseUrl = "https://api.themoviedb.org/3";
  static imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  generateMoviesUrl = ({ language = "en-US", page = 1/* , region */ }) => {
    return `${MovieClient.requestBaseUrl}/movie/popular?api_key=${this.apiKey}&language=${language}&page=${page}`
  }

  getPopularMovies = async (options) => {
    const url = this.generateMoviesUrl(options);
    // console.log(url);
    const response = await fetch(url);
    return response.json();
  }


}

export default MovieClient;