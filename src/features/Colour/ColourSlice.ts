import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface ColourProperties {
    colour: string
}

const initialState: ColourProperties = {
    colour: '#ef1510'
}

export const colourSlice = createSlice({
    name: 'colour',
    initialState,
    reducers: {
        changeColour: (state, action: PayloadAction<string>) => {
            state.colour = action.payload;
        },
    }
})

export const { changeColour } = colourSlice.actions;
export const selectColour = (state: RootState) => state.colour;
export default colourSlice.reducer;