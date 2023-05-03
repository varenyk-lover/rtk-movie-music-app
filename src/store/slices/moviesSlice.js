import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../action";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },

        //Here is for experiment:
        /*   reset(state, action) {
               return [];
               //  We can't assign like state = []; cause we need return a new state.
           }*/
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});


export const {addMovie, removeMovie} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;