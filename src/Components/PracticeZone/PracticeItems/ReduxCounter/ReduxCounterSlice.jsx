// Redux State Logic for ReduxCounter
import {createSlice, createAction} from '@reduxjs/toolkit';

// const initialState = { value: 0 }
const decrementBy = createAction('decrementBy');

const reduxCounterSlice = createSlice({
    name: "rcounter",
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
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(decrementBy, (state, action) => {
                //another notation
                return state + action.payload; //state.value??
            })
            .addDefaultCase((state, action) => {})
    }
})

export const {increment, decrement, incrementByAmount} = reduxCounterSlice.actions;
export default reduxCounterSlice.reducer;