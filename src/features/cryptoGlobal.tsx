import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getGlobalInfo = createAsyncThunk("crypto/getGlobal", async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/global");
    const data = res.json();
    return data;
  } catch (error) {}
});

const initialState: {
  globalInfo: any[];
  isLoading: boolean;
} = {
  globalInfo: [],
  isLoading: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGlobalInfo.fulfilled, (state, action: any) => {
      // console.log(action);
      state.isLoading = false;
      state.globalInfo = action.payload;
    });
    builder.addCase(getGlobalInfo.pending, (state: any, action) => {
      state.isLoading = true;
      //   state.globalInfo = action.payload;
    });
    builder.addCase(getGlobalInfo.rejected, (state: any, action) => {
      state.isLoading = false;
      //   state.globalInfo = action.payload;
    });
  },
});
export default globalSlice.reducer;
