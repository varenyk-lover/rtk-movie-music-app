import {configureStore, createSlice} from "@reduxjs/toolkit";

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
        }
    }
});

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
        },
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

export {store};
//Action creator:
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie} = moviesSlice.actions;





/* //Example HOW RTK WORKS inside:
//We usually don't interact directly to store,cause we have react-redux. But if we want - use getState() methode:
const startingState = store.getState();
console.log(JSON.stringify(startingState));

//We could also change state manually:
store.dispatch({
    //This means. after /, that we use slice song and particularly addSong part
    type: 'song/addSong',
    payload: 'New Song!!!'
});

//We could now check changed state:
const finalState = store.getState();
console.log(JSON.stringify(finalState));


//Show you which action creators and types are here:
console.log(songsSlice.actions);
console.log(songsSlice.actions.addSong());
//to change:
console.log(songsSlice.actions.addSong('new song'));
*/
