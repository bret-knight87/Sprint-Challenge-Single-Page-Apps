import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import "../../src/index.css";

export default function SearchForm(props) {

  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState(characters);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('There is an error!', error);
      });

      const results = characters.filter(character => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(results);
    }, [searchTerm]);

  return (
    <div className>
      <form>
        <label htmlFor='name'></label>
        <input
          className='search'
          id='name'
          type='text'
          name='name'
          placeholder='Search'
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className='character-list'>
        <ul>
          {searchResults.map(character => (
            <CharacterCard image={character.image} name={character.name} status={character.status} origin={character.origin} /> 
          ))}
        </ul>
      </div>
    </div>
  );
}
