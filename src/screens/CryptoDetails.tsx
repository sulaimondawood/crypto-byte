import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./CryptoDetails.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMarketChart } from "../features/cryptoMarketChart";
import Spinner from "../components/Spinner";
const CryptoDetails = () => {
  const dispatch = useDispatch();
  // const { data } = useSelector((state: any) => state.cryptoCurrencies);
  const { data } = useSelector((state: any) => state.cryptoMarket);
  const { isLoading } = useSelector(
    (state: { cryptoCurrencies: { isLoading: boolean } }) =>
      state.cryptoCurrencies
  );
  console.log(data);

  const { cryptoId } = useParams();
  console.log(cryptoId);
  useEffect(() => {
    dispatch<any>(getMarketChart(cryptoId));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="crypto-details">
      <div className="top">
        <h1>
          {data.name} ({data.symbol}) Details
        </h1>
        <p>
          {data.name} live price in US dollars. View value statisctics , market
          cap and supply
        </p>
      </div>
      <div className="stat-container">
        <div className="stat">
          <div className="other-stats">
            <div className="top">
              <h1> Top 4 Market Data</h1>
              <p>An overview showing {data.name} market data statistics</p>
            </div>
            <div className="other-stats-row">
              <div className="col-wrapper">
                <p className="title">Market Cap</p>
                <div className="col">
                  <p>btc: {data?.market_data?.market_cap?.btc.toFixed(3)}</p>
                  <p>usd: {data?.market_data?.market_cap?.usd.toFixed(3)}</p>
                  <p>eth: {data?.market_data?.market_cap?.dot.toFixed(3)}</p>
                  <p>ngn: {data?.market_data?.market_cap?.dot.toFixed(3)}</p>
                </div>
              </div>
              <div className="col-wrapper">
                <p className="title">ATH</p>
                <div className="col">
                  <p>btc: {data?.market_data?.ath?.btc.toFixed(3)}</p>
                  <p>usd: {data?.market_data?.ath?.usd.toFixed(3)}</p>

                  <p>eth: {data?.market_data?.ath?.dot.toFixed(3)}</p>
                  <p>ngn: {data?.market_data?.ath?.dot.toFixed(3)}</p>
                </div>
              </div>
              <div className="col-wrapper">
                <p className="title">ATH %</p>
                <div className="col">
                  <p>
                    btc:
                    {data?.market_data?.ath_change_percentage?.btc.toFixed(3)}
                  </p>
                  <p>
                    usd:
                    {data?.market_data?.ath_change_percentage?.usd.toFixed(3)}
                  </p>

                  <p>
                    eth:
                    {data?.market_data?.ath_change_percentage?.dot.toFixed(3)}
                  </p>
                  <p>
                    ngn:
                    {data?.market_data?.ath_change_percentage?.dot.toFixed(3)}
                  </p>
                </div>
              </div>
              <div className="col-wrapper">
                <p className="title">ATL %</p>
                <div className="col">
                  <p>
                    btc:
                    {data?.market_data?.atl_change_percentage?.btc.toFixed(3)}
                  </p>
                  <p>
                    usd:
                    {data?.market_data?.atl_change_percentage?.usd.toFixed(3)}
                  </p>

                  <p>
                    eth:
                    {data?.market_data?.atl_change_percentage?.eth.toFixed(3)}
                  </p>
                  <p>
                    ngn:
                    {data?.market_data?.atl_change_percentage?.ngn.toFixed(3)}
                  </p>
                </div>
              </div>
              <div className="col-wrapper">
                <p className="title">ATL</p>
                <div className="col">
                  <p>btc: {data?.market_data?.atl?.btc.toFixed(3)}</p>
                  <p>usd: {data?.market_data?.atl?.usd.toFixed(3)}</p>

                  <p>eth: {data?.market_data?.atl?.eth.toFixed(3)}</p>
                  <p>ngn: {data?.market_data?.atl?.ngn.toFixed(3)}</p>
                </div>
              </div>
              <div className="col-wrapper">
                <p className="title">LOW 24hrs</p>
                <div className="col">
                  <p>btc: {data?.market_data?.low_24h?.btc.toFixed(3)}</p>
                  <p>usd: {data?.market_data?.low_24h?.usd.toFixed(3)}</p>

                  <p>eth: {data?.market_data?.low_24h?.eth.toFixed(3)}</p>
                  <p>ngn: {data?.market_data?.low_24h?.ngn.toFixed(3)}</p>
                </div>
              </div>
              <div className="col-wrapper">
                <p className="title">HIGH 24hrs</p>
                <div className="col">
                  <p>btc: {data?.market_data?.high_24h?.btc.toFixed(3)}</p>
                  <p>usd: {data?.market_data?.high_24h?.usd.toFixed(3)}</p>

                  <p>eth: {data?.market_data?.high_24h?.eth.toFixed(3)}</p>
                  <p>ngn: {data?.market_data?.high_24h?.ngn.toFixed(3)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="top">
            <h1>{data.name} Value Statistics</h1>
            <p>An overview showing {data.name} statistics</p>
          </div>
          <div className="overview-stat">
            <div>
              <p> Market Cap Rank</p>
              <p>{data.market_cap_rank}</p>
            </div>

            <div>
              <p> Liquidity Value</p>
              <p>{data.liquidity_score}</p>
            </div>
            <div>
              <p> Public Interest</p>
              <p>{data.public_interest_score}</p>
            </div>
            <div>
              <p>sentiment votes down percentage</p>
              <p>{data.sentiment_votes_down_percentage}</p>
            </div>
            <div>
              <p> Sentiment votes up percentage</p>
              <p>{data.sentiment_votes_up_percentage}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-coin">
        <h1>Info About {data.name}</h1>
        <p className="info">{data?.description?.en}</p>
      </div>

      <div className="footer">
        <h1>Links For Fully Detailed Info</h1>
        <a
          href={
            data?.links?.blockchain_site[0] ||
            data?.links?.blockchain_site[1] ||
            data?.links?.blockchain_site[2]
          }
          target="_blank"
        >
          BlockChain site
        </a>
        <a
          href={
            data?.links?.homepage[0] ||
            data?.links?.homepage[1] ||
            data?.links?.homepage[2]
          }
          target="_blank"
        >
          Homepage
        </a>
        <a
          href={
            data?.links?.official_forum_url[0] ||
            data?.links?.official_forum_url[1] ||
            data?.links?.official_forum_url[2]
          }
          target="_blank"
        >
          Official Forum
        </a>
        <a href={data?.links?.subreddit_url} target="_blank">
          Reddit
        </a>
      </div>
    </section>
  );
};

export default CryptoDetails;
