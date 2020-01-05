import React from 'react';
import styles from './styles.module.css';

function Movie(props) {
    return (
        <div className={styles.MoviePage}>
            <h1>
                Movie Page {props.match.params.movieId}
            </h1>
        </div>
    )
}

export default Movie;