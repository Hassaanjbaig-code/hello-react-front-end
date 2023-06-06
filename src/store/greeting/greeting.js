import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:3000/api/greetings";

export const fetchgreeting = createAsyncThunk("greeting/fetchgreeting", async () => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
});

const greetingSlice = createSlice({
    name: "greeting",
    initialState: { data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchgreeting.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    }
})

export default greetingSlice.reducer;