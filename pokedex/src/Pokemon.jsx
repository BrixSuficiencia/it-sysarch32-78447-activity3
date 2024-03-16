import React from 'react';

function Pokemon({ id, name, image, types, hp, attack, defense, spattack, spdefense, speed}) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={image} alt={name} className="pokemon-image" />
            </div>
            <div className="pokemon-info">
                <p id="col1">[{id}] {name}</p>
                <div className="types-container">
                    {types && types.length > 0 && <p>{types.join('           ')}</p>}
                </div>
                <p>HP: {hp}</p>
                <p>Attack: {attack}</p>
                <p>Defense: {defense}</p>
                <div className='row2'>
                <p>Sp. Attack: {spattack}</p>
                <p>Sp. Defense: {spdefense}</p>
                <p>Speed: {speed}</p>

                </div>
            </div>
        </div>
    );
}