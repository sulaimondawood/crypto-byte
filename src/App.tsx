import "./App.css";

import { useDispatch } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Cryptocurrencies from "./screens/Cryptocurrencies";
import Exchanges from "./screens/Exchanges";
import News from "./screens/News";
import Nav from "./components/Nav";
import {
  getCoins,
  getCoinsTrending,
  getGlobalInfo,
} from "./features/cryptoApi";
import { useEffect } from "react";
import { getCryptoNews } from "./features/cryptoNews";
import CryptoDetails from "./screens/CryptoDetails";
import { getCoinsList } from "./features/cryptoCurrencies";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getGlobalInfo());
    dispatch<any>(getCoins());
    dispatch<any>(getCoinsTrending());
    dispatch<any>(getCryptoNews());
    dispatch<any>(getCoinsList());
  }, []);
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exhanges" element={<Exchanges />} />
            <Route path="news" element={<News />} />
            <Route
              path="cryptocurrency/:cryptoId"
              element={<CryptoDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
