import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row } from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charcters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const chars = response.data.results;
        console.log(chars);
        setCharacters(chars);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {charcters.map(char => {
          return <CharacterCard image={char.image} name={char.name} status={char.status} origin={char.origin} />
        })};
      </Row>
    </Container>
  );
}
