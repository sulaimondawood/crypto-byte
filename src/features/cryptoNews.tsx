import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCryptoNews = createAsyncThunk("crypto/cryptoNews", async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cff05d5567msh00c9f291616096ep10c6b0jsn8b1c093fa5eb",
        "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
      },
    };

    const res = await fetch(
      "https://crypto-news-live3.p.rapidapi.com/news",
      options
    );
    const data = res.json();

    return data;
  } catch (error) {}
});

const initialState: { isCryptoNewsLoading: boolean; data: any[] } = {
  isCryptoNewsLoading: true,
  data: [],
};
const cryptoNewsSlice = createSlice({
  name: "cryptoNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptoNews.fulfilled, (state, { payload }) => {
      state.isCryptoNewsLoading = false;
      state.data = payload;
    });
    builder.addCase(getCryptoNews.pending, (state) => {
      state.isCryptoNewsLoading = true;
    });
    builder.addCase(getCryptoNews.rejected, (state) => {
      state.isCryptoNewsLoading = false;
    });
  },
});
export default cryptoNewsSlice.reducer;
