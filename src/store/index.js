import {configureStore} from "@reduxjs/toolkit";
import {songsReducer, addSong, removeSong} from "./slices/songsSlice";
import {moviesReducer, addMovie, removeMovie} from "./slices/moviesSlice";
import {reset} from "./action";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});

export {store};
export {addMovie, removeMovie, addSong, removeSong, reset};

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
