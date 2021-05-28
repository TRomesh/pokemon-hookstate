import useGlobalState from "../store"
import { List, ListItem, ListIcon, ListContent, ListHeader, ListDescription, Segment } from 'semantic-ui-react'

function Row({ id, name, power, description, selectPokemon, deletePokemon }) {
    return (
        <ListItem>
            <ListIcon name="trash alternate outline" onClick={() => deletePokemon(id)}></ListIcon>
            <ListIcon name="edit outline" onClick={() => selectPokemon({ id, name, power, description })}></ListIcon>
            <ListContent>
                <ListHeader as="h3">{name}</ListHeader>
                <ListHeader as="h5">{power}</ListHeader>
                <ListDescription>{description}</ListDescription>
            </ListContent>
        </ListItem>
    )
}

function PokemonList() {
    const state = useGlobalState();

    const deletePokemon = (id) => {
        state.deletePokemon(id);
    }

    const selectPokemon = (pokemon) => {
        state.selectPokemon(pokemon);
    }

    return (
        <Segment>
            <List>
                {
                    state.get().pokemons.map((pokemon) => {
                        return <Row key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            power={pokemon.power}
                            selectPokemon={selectPokemon}
                            deletePokemon={deletePokemon}
                            description={pokemon.description}></Row>
                    })}
            </List>
        </Segment>
    )
}

export default PokemonList
