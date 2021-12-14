import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SquareProperties {
    squares: string[]
}
const initialState: SquareProperties = {
    squares: Array(1107).fill('0')
}
interface PayloadValue {
    index: string,
    colour: string
}
export const squaresSlice = createSlice({
    name: 'squares',
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<PayloadValue>) => {
            const index = Number(action.payload.index);
            state.squares[index] = action.payload.colour;
        },
        resetBoard: () => {
            return initialState;
        },
        eraseValue: (state, action: PayloadAction<string>) => {
            const index = Number(action.payload);
            state.squares[index] = '0'
        },
        fillSquares: (state, action: PayloadAction<string>) => {
            for(let i = 0; i < state.squares.length; i++) {
                if(state.squares[i] === '0') {
                    state.squares[i] = action.payload;
                }
            }
        }
    }
})

export const { changeValue, resetBoard, eraseValue, fillSquares} = squaresSlice.actions;
export const selectSquares = (state: RootState) => state.squares;
export default squaresSlice.reducer;