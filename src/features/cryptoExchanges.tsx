import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getExchanges = createAsyncThunk("exchanges/crypto", async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/exchanges");
    const data = res.json();
    console.log(data);

    return data;
  } catch (error) {}
});
const initialState: { isLoading: boolean; data: any[] } = {
  isLoading: true,
  data: [],
};

const cryptoExchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExchanges.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getExchanges.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default cryptoExchangeSlice.reducer;
