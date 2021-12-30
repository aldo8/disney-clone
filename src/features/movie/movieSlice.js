import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    recommend:null,
    newDisney:null,
    origin:null,
    trending:null
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action) => {
            state.recommend = action.payload.reccomend;
            state.newDisney = action.payload.newDisney;
            state.origin = action.payload.origin;
            state.trending = action.payload.trending;
        }
    }
})

export const {setMovies} = movieSlice.actions;
export const selectRecommend = (state) => state.movie.reccomend;
export const selectNewDisney = (state) => state.movie.newDisney; 
export const selectOrigin = (state) => state.movie.origin;
export const selectTrending = (state) => state.movie.Trending; 

export default movieSlice.reducer;