import { Persistence } from '@hookstate/persistence';
import { createState, useState, none } from '@hookstate/core'

const store = createState({
    pokemon: { name: '', power: '', description: '' },
    pokemons: [{ id: 1, name: 'pikachu', power: 'fire', description: 'fluffy' }],
    isEditing: false,
})

const useGlobalState = () => {

    const state = useState(store);
    state.attach(Persistence('pk'))

    return ({
        get: () => state.value,
        addPokemon: (pokemon) => {
            state.pokemons.merge([pokemon])
        },
        deletePokemon: (id) => {
            state.pokemons.keys.forEach(index => {
                if (state.pokemons[index].id.get() === id) {
                    state.pokemons[index].set(none)
                }
            })
        },
        updatePokemon: (data) => {
            state.pokemons.keys.forEach(index => {
                if (state.pokemons[index].id.get() === data.id) {
                    state.pokemons[index].merge(data)
                }
            })
            state.merge({ isEditing: false })
            state.merge({ pokemon: { name: '', power: '', description: '' } })
        },
        selectPokemon: (pokemon) => {
            state.merge({ isEditing: true })
            state.merge({ pokemon: pokemon })
        },
        clearPokemon: () => {
            state.merge({ isEditing: false })
            state.merge({ pokemon: { name: '', power: '', description: '' } })
        }
    })
}

export default useGlobalState;