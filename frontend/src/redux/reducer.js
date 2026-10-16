import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFav: (state, { payload }) => {
            state.allFavorites.push(payload)
        },
        deleteFav: (state, { payload }) => {
            state.myFavorites = state.myFavorites.filter(c => c.id !== payload)
            state.allFavorites = state.allFavorites.filter(c => c.id !== payload)
        },
        filterReset: (state) => {
            state.myFavorites = state.allFavorites
        },
        filterGender: (state, { payload }) => {
            if (payload !== 'All') {
                state.myFavorites = state.myFavorites.filter(c => c.gender === payload)
            }
        },
        filterSpecie: (state, { payload }) => {
            if (payload !== 'All') {
                state.myFavorites = state.myFavorites.filter(c => c.species === payload)
            }
        },
        filterStatus: (state, { payload }) => {
            if (payload !== 'All') {
                state.myFavorites = state.myFavorites.filter(c => c.status === payload)
            }
        },
        orderCards: (state, { payload }) => {
            if (payload === 'Newest') {
                state.myFavorites = [...state.myFavorites].reverse()
            } else if (payload === 'Ascending') {
                state.myFavorites = [...state.myFavorites].sort((a, b) => a.id - b.id)
            } else if (payload === 'Descending') {
                state.myFavorites = [...state.myFavorites].sort((a, b) => b.id - a.id)
            }
        }
    }
})

export const {
    addFav,
    deleteFav,
    filterReset,
    filterGender,
    filterSpecie,
    filterStatus,
    orderCards
} = favoritesSlice.actions

export default favoritesSlice.reducer
