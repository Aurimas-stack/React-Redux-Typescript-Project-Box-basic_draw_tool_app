import { configureStore } from "@reduxjs/toolkit";
import colourReducer from '../features/Colour/ColourSlice';
import squareReducer from '../features/Squares/SquaresSlice';

export const store = configureStore({
    reducer: {
        colour: colourReducer,
        squares: squareReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;