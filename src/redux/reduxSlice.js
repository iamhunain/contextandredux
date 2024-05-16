import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {}


export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        printclg: (state, action) => {
            console.log(action.payload)
        }
    }
})


export const { printclg } = slice.actions


export default slice.reducer