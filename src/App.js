import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Card from './componentes/cards';


function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error, "Se muestra el error"));
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <div className='app'>
        <img style={{ maxWidth: '150px' }} src="https://i.pinimg.com/736x/eb/78/7f/eb787faf44fff51e8eaec626b55c5e88.jpg" alt="Rick and Morty Logo" />
        <section className='cards'>
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </section>
        <footer>
          <h1>TechSchool2024</h1>
        </footer>
      </div>
    </div>
  );
}

export default App;
