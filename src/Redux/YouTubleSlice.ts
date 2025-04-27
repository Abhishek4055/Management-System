import { createSlice } from "@reduxjs/toolkit";

const youTubeState = {
  isLoading: false,
  error: {},
  vedioData: [],
};
const youTubleSlice = createSlice({
  name: "youTuble",
  initialState: youTubeState,
  reducers: {
    setVedioData: (state, action) => {
      state.vedioData = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setVedioData, setLoading, setError } = youTubleSlice.actions;
export default youTubleSlice.reducer;
