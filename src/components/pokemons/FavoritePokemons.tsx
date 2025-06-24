import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStorgePokemons = (): FavoritePokemon[] => {

    const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')

    return favoritePokemons;
}


export const FavoritePokemons = () => {

    const [pokemons , setPokemons] = createSignal(getLocalStorgePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>
                {
                    (pokemon) => (
                        <FavoritePokemonCard pokemon={ pokemon }/>
                    )
                }
            </For>
        </div>
    )
}