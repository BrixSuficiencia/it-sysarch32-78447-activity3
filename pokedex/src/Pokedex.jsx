import React, { useState } from 'react';
import Pokemon from './Pokemon';

function Pokedex({ pokemonList }) {
    const [language, setLanguage] = useState('english');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="pokedex-container">
            <div className="language-buttons">
                <button class-name = "btnDesign" onClick={() => handleLanguageChange('english')}>English</button>
                <button class-name = "btnDesign" onClick={() => handleLanguageChange('japanese')}>Japanese</button>
                <button class-name = "btnDesign" onClick={() => handleLanguageChange('chinese')}>Chinese</button>
                <button class-name = "btnDesign" onClick={() => handleLanguageChange('french')}>French</button>
            </div>
            <div className="pokemon-list">
                {pokemonList.map((pokemon, index) => (
                    <Pokemon
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name[language]}
                        image={pokemon.image}
                        types={pokemon.type}
                        hp={pokemon.base.HP}
                        attack={pokemon.base.Attack}
                        defense={pokemon.base.Defense}
                        spattack={pokemon.base["Sp. Attack"]}
                        spdefense={pokemon.base["Sp. Defense"]}
                        speed={pokemon.base.Speed}
                        
                    />
                ))}
            </div>
        </div>
    );
}

export default Pokedex;