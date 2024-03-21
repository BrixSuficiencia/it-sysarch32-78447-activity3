import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Pokedex from './Pokedex';
function App() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
            .then(response => response.json())
            .then(data => setPokemonList(data));
    }, []);

    return (
        <div className="app-container">
            <Header />
            <Pokedex pokemonList={pokemonList} />
        </div>
    );
}

export default App;