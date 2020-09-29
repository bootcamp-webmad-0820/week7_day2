import React, { Component } from 'react'

import { movies as moviesFromFakeApi } from './../data-simulation'
import MovieCard from './Movie-card'
import './Movies-list.css'

class MoviesList extends Component {
    constructor() {
        super()
        this.state = {
            movies: moviesFromFakeApi,
            showOscarAwarded: true,
            activeFilter: false
        }
    }

    removeMovieFromState = movieID => {
        this.setState({
            movies: this.state.movies.filter(elm => elm.id != movieID)
        })
    }

    toggleMoviesFilter = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded })

    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscar === this.state.showOscarAwarded)

        return (
            <>
                <button onClick={this.toggleMoviesFilter}>Mostrar películas {this.state.showOscarAwarded ? 'sin oscar' : 'con oscar'}</button>
                <ul>
                    {filteredMovies.map(elm => <MovieCard key={elm.id} {...elm} removeMovie={() => this.removeMovieFromState(elm.id)} />)}
                </ul>
            </>
        )
    }
}

export default MoviesList