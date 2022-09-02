import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk("crypto/cryptoSlice", async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/");
    const data = res.json();

    return data;
  } catch (error) {}
});

export const getCoinsTrending = createAsyncThunk("crypto/trends", async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = res.json();
    return data;
  } catch (error) {}
});

const initialState: {
  coins: any[];
  trends: any[];
  isLoading: boolean;
} = {
  coins: [],
  trends: [],
  isLoading: true,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (state: any, action: any) => {
      //   console.log(action);
      state.coins = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCoins.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getCoinsTrending.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCoinsTrending.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
    });
    builder.addCase(getCoinsTrending.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default cryptoSlice.reducer;
