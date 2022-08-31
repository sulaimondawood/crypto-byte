import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoinsList = createAsyncThunk("crypto/marketChart", async () => {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/`);
    const data = res.json();

    return data;
  } catch (error) {}
});

const initialState: { isLoading: Boolean; data: any[] } = {
  isLoading: true,
  data: [],
};

const cryptoCoinsList = createSlice({
  name: "cryptoMarket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoinsList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getCoinsList.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCoinsList.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default cryptoCoinsList.reducer;
