import "./App.css";

import { useDispatch } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Cryptocurrencies from "./screens/Cryptocurrencies";
import Exchanges from "./screens/Exchanges";
import News from "./screens/News";
import Nav from "./components/Nav";
import { getCoins, getGlobalInfo } from "./features/cryptoApi";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getGlobalInfo());
    dispatch<any>(getCoins());
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
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
