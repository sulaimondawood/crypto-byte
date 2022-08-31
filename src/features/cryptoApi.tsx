import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";

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

// export const getCryptoNews = createAsyncThunk("crypto/CryptoNews", async () => {
//   try {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "cff05d5567msh00c9f291616096ep10c6b0jsn8b1c093fa5eb",
//         "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
//       },
//     };

//     const res = await fetch(
//       "https://crypto-news-live3.p.rapidapi.com/news",
//       options
//     );
//     const data = res.json();
//     return data;
//   } catch (error) {}
// });
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
