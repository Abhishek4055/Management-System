import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restro__OBJECT__MODAL } from "Component/pages/Swiggy/utils/modal";

interface SWIGGI_STATE_MODEL {
  isLoading: boolean;
  error: any;
  allData: any;
  restroRequestBody: any;
}

const swiggyState: SWIGGI_STATE_MODEL = {
  isLoading: false,
  error: null,
  allData: [],
  restroRequestBody: {
    collection_id: "",
    tags: "",
    type: "",
  },
};

const swiggySlice = createSlice({
  name: "Swiggy",
  initialState: swiggyState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<object | null>) => {
      state.error = action.payload;
    },
    setAllData: (state, action: PayloadAction<object | null>) => {
      state.allData = action.payload;
    },
    setRestroRequestBody: (state, action: PayloadAction<any | null>) => {
      state.restroRequestBody = action.payload;
    },
  },
});

export const { setIsLoading, setError, setAllData, setRestroRequestBody } =
  swiggySlice.actions;
export default swiggySlice.reducer;
