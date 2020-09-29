import React from 'react'
import './App.css'

import { drinks, movies } from './data-simulation'

import MoviesList from './Movies-list/Movies-list'


function App() {

  return (
    <>
      <h3>Películas (dinámicas)</h3>
      <MoviesList />
      <hr />
      <h3>Bebidas (estáticas)</h3>
      <ul>{drinks.map((elm, idx) => <li key={idx}>{elm}</li>)}</ul>
      <hr />
      <h3>Pelis (estáticas)</h3>
      <ul>{movies.map(elm => <li key={elm.id}>{elm.title} ({elm.director})</li>)}</ul>
    </>
  )
}

export default App;
