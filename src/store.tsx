import { configureStore } from "@reduxjs/toolkit";
import CrytpoInitials from "./features/cryptoApi";
import InitialCryptoNews from "./features/cryptoNews";
import CryptoMarketChartInitials from "./features/cryptoMarketChart";
import CryptoCoinsListInitials from "./features/cryptoCurrencies";
import CryptoGlobal from "./features/cryptoGlobal";
import CryptoExchanges from "./features/cryptoGlobal";
export const store = configureStore({
  reducer: {
    crypto: CrytpoInitials,
    cryptoNews: InitialCryptoNews,
    cryptoMarket: CryptoMarketChartInitials,
    cryptoCurrencies: CryptoCoinsListInitials,
    exchanges: CryptoExchanges,
    globalStat: CryptoGlobal,
  },
});
