// import React from 'react';
// import { createStore } from 'redux';
// import { Reducer, initialState } from './reducer';

// PRE Redux Toolkit logic
// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer,
//         initialState
//     );
//     return store;
// }

//////////////////////////////////////////////////
//Redux Toolkit logic
import { configureStore } from '@reduxjs/toolkit'
import rcounter from "Components/PracticeZone/PracticeItems/ReduxCounter/ReduxCounterSlice";

const store = configureStore({
  reducer: {
    rcounter,
  },
})

export default store;