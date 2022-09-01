import "../features/cryptoApi";
import "./Home.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Spinner from "../components/Spinner";

const Home = () => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false);
  const { isLoading } = useSelector((state: any) => state.crypto);
  const { isCryptoNewsLoading } = useSelector((state: any) => state.cryptoNews);
  const { data: news } = useSelector((state: any) => state.cryptoNews);

  const { coins } = useSelector((state: any) => state.crypto);
  const { data } = useSelector((state: any) => state.globalStat.globalInfo);
  const { isLoading: isLoadingG } = useSelector(
    (state: any) => state.globalStat
  );
  const { coins: trending } = useSelector((state: any) => state.crypto.trends);

  if (isLoading) {
    return <Spinner />;
  }
  if (isCryptoNewsLoading) {
    return <Spinner />;
  }
  if (isLoadingG) {
    return <Spinner />;
  }

  // console.log(data);

  const {
    active_cryptocurrencies,
    market_cap_change_percentage_24h_usd,
    ongoing_icos,
    markets,
    totalCoins,
    total_market_cap,
    total_volume,
  } = data;
  // return <h1>Hello</h1>;
  return (
    <section className="home-section">
      <div className="home-top">
        <h1>Global Crypto Currency Statistics</h1>
        <div className="top-row">
          <div>
            <p className="total-assets">Total Coins</p>
            <p className="total-assets-num">{active_cryptocurrencies}</p>
          </div>
          <div>
            <p className="total-assets">Total Exchanges</p>
            <p className="total-assets-num">{markets}</p>
          </div>
          <div>
            <p className="total-assets">BTC Total Market Cap</p>
            <p className="total-assets-num">
              ${total_market_cap.btc.toFixed(1)}B
            </p>
          </div>
          <div>
            <p className="total-assets">BTC Total 24h Volume</p>
            <p className="total-assets-num">
              ${total_market_cap.btc.toFixed(1)}B
            </p>
          </div>
          <div>
            <p className="total-assets">Total Markets</p>
            <p className="total-assets-num">{markets}</p>
          </div>
        </div>
      </div>

      <section className="trends">
        <h1>Top Trending Coins In The World</h1>

        <div className="trends-container">
          {trending.map(
            (trend: {
              item: {
                market_cap_rank: number;
                small: string;
                symbol: string;
                price_btc: number;
                name: string;
                coin_id: number;
              };
            }) => {
              return (
                <div key={trend?.item?.coin_id}>
                  <p>
                    {trend?.item?.name}
                    <span className="symbol">{trend?.item?.symbol}</span>
                  </p>
                  <img src={trend?.item?.small} alt="" />
                  <p>Market Cap Rank :{trend?.item?.market_cap_rank}</p>
                  <p className="price">{trend?.item?.price_btc.toFixed(8)}$B</p>
                </div>
              );
            }
          )}
        </div>
      </section>
      <article>
        <h1>Top 10 Cryptocurrencies</h1>
        <ol>
          {coins
            .slice(0, 10)
            .map(
              (coin: {
                id: string;
                image: { small: string };
                last_updated: string;
                name: string;
                symbol: string;
              }) => {
                return (
                  <li key={coin.id}>
                    <div>
                      <img src={coin.image.small} alt="" />
                      <p className="name">{coin.name}</p>
                      <p className="symbol">{coin.symbol}</p>
                    </div>
                  </li>
                );
              }
            )}
        </ol>
      </article>

      <article className="news">
        <h1>Top Hot News</h1>
        <div className="news-container">
          {news.slice(0, 6).map((newsItem: any) => {
            return (
              <div className="news-item">
                <h4>{newsItem.title}</h4>
                <a target="_blank" rel="noreferrer" href={newsItem.url}>
                  Read news
                </a>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Home;
