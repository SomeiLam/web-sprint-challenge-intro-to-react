import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled, { keyframes } from 'styled-components';
import './App.css';

const StyledApp = styled.div`
  font-size: 62.5%;

  h1 {
    font-size: 2.5rem;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
        setError("Sorry, try again soon");
      })
  }, []);

  return (
    <StyledApp className="App">
      {error ? <h1>{error}</h1> : <h1 className="Header">Star Wars Characters</h1>}
      {
        characters && characters.map((character, index) => {
          return <Character key={index}
                            info={character}
            />
        })
      }
    </StyledApp>
  );
}

export default App;
