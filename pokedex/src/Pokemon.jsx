
import PropTypes from 'prop-types';

function Pokemon({ id, name, image, types, hp, attack, defense, spattack, spdefense, speed }) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={image} alt={name} className="pokemon-image" />
            </div>
            <div className="pokemon-info">
                <div className='top-info'>
                    <p id="col1">[{id}] {name}</p>
                    <div className="types-container">
                        {types && types.length > 0 && <p>{types.join('           ')}</p>}
                    </div>
                </div>
                <div className='rows'>
                    <div className='row1'>
                        <p>HP: {hp}</p>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                    </div>
                 <div className='row2'>
                        <p>Sp. Attack: {spattack}</p>
                        <p>Sp. Defense: {spdefense}</p>
                        <p>Speed: {speed}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Pokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    spattack: PropTypes.number.isRequired,
    spdefense: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
};

export default Pokemon;
