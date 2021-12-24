import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store";
import { GetPokemon } from "./actions/PokemonActions";
function App() {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState("");
    const pokemonState = useSelector((state: RootStore) => state.pokemon);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setPokemonName(event.target.value);
    const handleSubmit = () => {
        dispatch(GetPokemon(pokemonName));
    };
    console.log("pokemon state : ", pokemonState);
    return (
        <div className="App">
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {pokemonState.pokemon && (
                <div>
                    <img
                        src={pokemonState.pokemon.sprites.front_default}
                        alt=""
                    />
                    {pokemonState.pokemon.abilities.map((ability) => {
                        return <p>{ability.ability.name} </p>;
                    })}
                </div>
            )}
        </div>
    );
}

export default App;
