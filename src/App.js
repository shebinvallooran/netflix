import React from 'react'
import Row from './component/Row'
import requests from './requests'
import './App.css'
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending In India" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />

    </div>

  );
}

export default App;