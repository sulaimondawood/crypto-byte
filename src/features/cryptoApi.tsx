import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk("crypto/cryptoSlice", async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/");
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {}
});
export const getGlobalInfo = createAsyncThunk("crypto/getGlobal", async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/exchanges");
    const data = res.json();
    return data;
  } catch (error) {}
});

const initialState: { coins: any[]; globalInfo: any[]; isLoading: boolean } = {
  coins: [],
  globalInfo: [],
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
    builder.addCase(getGlobalInfo.fulfilled, (state, action: any) => {
      // console.log(action);
      state.globalInfo = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getGlobalInfo.pending, (state: any, action) => {
      state.isLoading = true;
      state.globalInfo = action.payload;
    });
    builder.addCase(getGlobalInfo.rejected, (state: any, action) => {
      state.isLoading = false;
      state.globalInfo = action.payload;
    });
  },
});

export default cryptoSlice.reducer;
