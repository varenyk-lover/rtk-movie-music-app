import {reset} from "../action";
import {createSlice} from "@reduxjs/toolkit";

//here is our REDUCER
const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        //H we write about our ACTIONS
        addSong(state, action) {
            state.push(action.payload);
            //Here, inside reducer, it's not the big store state, here is only part of state managed by this reducer
            //When in other parts in app, state - means whole state in store
            // The payload is the data that your reducer will use to update the state. For ex, here we get song as payload:
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
            //   Find a song by indexOf and delete one by 1
        }
    },

    /*Extra - for extra additional operations.  allows createSlice to respond to other action
    types besides the types it has generated:*/
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        })
        //Here is for experiment:
        /*   builder.addCase(moviesSlice.actions.reset, (state, action) => {
               return [];
           });*/
    }
});


export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;