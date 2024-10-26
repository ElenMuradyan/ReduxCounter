import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        decrementByAmount: ( state, action ) => {
            state.value -= action.payload
        },
        incrementByAmount: ( state, action ) => {
            state.value += action.payload
        }
    }
})

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;