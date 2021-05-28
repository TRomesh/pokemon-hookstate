
import { useEffect } from "react";
import { useState } from '@hookstate/core';
import useGlobalState from "../store"
import { Form, FormField, Header, Input, Button, Segment } from 'semantic-ui-react'

const initialState = { name: '', power: '', description: '' }

function PokemonForm() {
    const state = useGlobalState();
    const pokemon = useState(initialState);

    const clear = () => {
        pokemon.set(initialState)
    }

    const createPokemon = () => {
        state.addPokemon({ id: Math.random(), ...pokemon.get() });
        clear();
    }

    useEffect(() => {
        pokemon.set(JSON.parse(JSON.stringify(state.get().pokemon)))
    }, [state.get().pokemon.id])

    const updatePokemon = async (pokemon) => {
        state.updatePokemon(pokemon);
    }

    const onChange = (type, value) => {
        pokemon.merge({ [type]: value })
    }

    const cancel = () => {
        clear()
    }



    return (
        <Segment>
            <Form>
                <FormField>
                    <Header as="h5">Name</Header>
                    <Input value={pokemon.get().name} onChange={(e, { value }) => onChange('name', value)} />
                </FormField>
                <FormField>
                    <Header as="h5">Power</Header>
                    <Input value={pokemon.get().power} onChange={(e, { value }) => onChange('power', value)} />
                </FormField>
                <FormField>
                    <Header as="h5">Description</Header>
                    <Input value={pokemon.get().description} onChange={(e, { value }) => onChange('description', value)} />
                </FormField>
                <Button onClick={() => state.get().isEditing ? updatePokemon(pokemon.get()) : createPokemon()}>{state.get().isEditing ? 'Update' : 'Save'}</Button>
                <Button onClick={() => cancel()}>Cancel</Button>
            </Form>
        </Segment>
    )
}

export default PokemonForm
