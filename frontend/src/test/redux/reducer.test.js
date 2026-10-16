import { describe, expect, it } from 'vitest'
import reducer, {
    addFav,
    deleteFav,
    filterGender,
    filterReset,
    filterSpecie,
    filterStatus,
    orderCards
} from '../../redux/reducer'

const characters = [
    { id: 2, gender: 'Female', species: 'Human', status: 'Alive' },
    { id: 1, gender: 'Male', species: 'Alien', status: 'Dead' }
]

describe('favorites reducer', () => {
    it('adds favorites and restores them when filters reset', () => {
        const state = characters.reduce((current, character) => (
            reducer(current, addFav(character))
        ), undefined)

        expect(state.allFavorites).toEqual(characters)
        expect(state.myFavorites).toEqual([])
        expect(reducer(state, filterReset()).myFavorites).toEqual(characters)
    })

    it('applies filters and ordering', () => {
        let state = characters.reduce((current, character) => (
            reducer(current, addFav(character))
        ), undefined)
        state = reducer(state, filterReset())
        state = reducer(state, filterGender('Female'))
        expect(state.myFavorites).toEqual([characters[0]])

        state = reducer(state, filterReset())
        state = reducer(state, filterSpecie('Alien'))
        expect(state.myFavorites).toEqual([characters[1]])

        state = reducer(state, filterReset())
        state = reducer(state, filterStatus('Dead'))
        expect(state.myFavorites).toEqual([characters[1]])

        state = reducer(state, filterReset())
        state = reducer(state, orderCards('Ascending'))
        expect(state.myFavorites.map(({ id }) => id)).toEqual([1, 2])
        state = reducer(state, orderCards('Descending'))
        expect(state.myFavorites.map(({ id }) => id)).toEqual([2, 1])
        state = reducer(state, orderCards('Newest'))
        expect(state.myFavorites.map(({ id }) => id)).toEqual([1, 2])
    })

    it('deletes a favorite from both lists', () => {
        let state = characters.reduce((current, character) => (
            reducer(current, addFav(character))
        ), undefined)
        state = reducer(state, filterReset())

        expect(reducer(state, deleteFav(2))).toEqual({
            allFavorites: [characters[1]],
            myFavorites: [characters[1]]
        })
    })
})
