import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMarketChart = createAsyncThunk(
  "crypto/marketChart",
  async (id: string | undefined, thunkAPI) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const data = res.json();
      console.log(data);
      return data;
    } catch (error) {}
  }
);

const initialState: { isLoading: Boolean; data: any[] } = {
  isLoading: true,
  data: [],
};

const cryptoMarketSlice = createSlice({
  name: "cryptoMarket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMarketChart.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getMarketChart.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMarketChart.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default cryptoMarketSlice.reducer;
