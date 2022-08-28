import "../features/cryptoApi";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLoading } = useSelector((state: any) => state.crypto);
  console.log(isLoading);

  const { coins } = useSelector((state: any) => state.crypto);
  const data = useSelector((state: any) => state.crypto);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // const { data } = useSelector((state: any) => state.crypto.globalInfo);
  console.log(data);

  // const {
  //   active_cryptocurrencies,
  //   market_cap_change_percentage_24h_usd,
  //   ongoing_icos,
  //   markets,
  //   totalCoins,
  //   total_market_cap,
  //   total_volume,
  // } = dat;
  return <h1>Hello</h1>;
  // return (
  //   <section className="home-section">
  //     <div className="home-top">
  //       <h1>Global Crypto Currency Statistics</h1>
  //       <div className="top-row">
  //         <div>
  //           <p className="total-assets">Total Coins</p>
  //           <p className="total-assets-num">{totalCoins}</p>
  //         </div>
  //         <div>
  //           <p className="total-assets">Total Exchanges</p>
  //           <p className="total-assets-num">{markets}</p>
  //         </div>
  //         <div>
  //           <p className="total-assets">Total Market Cap</p>
  //           <p className="total-assets-num">${active_cryptocurrencies}</p>
  //         </div>
  //         <div>
  //           <p className="total-assets">Total 24h Volume</p>
  //           <p className="total-assets-num">{total_market_cap.btc}</p>
  //         </div>
  //         <div>
  //           <p className="total-assets">Total Markets</p>
  //           <p className="total-assets-num">{total_volume.btc}</p>
  //         </div>
  //         <div>
  //           <p className="total-assets">Total</p>
  //           <p className="total-assets-num">{markets}</p>
  //         </div>
  //       </div>
  //     </div>

  //     <article>
  //       <h1>Top 15 Cryptocurrencies</h1>
  //       <ol>
  //         {coins.map(
  //           (coin: {
  //             id: string;
  //             image: { small: string };
  //             last_updated: string;
  //             name: string;
  //             symbol: string;
  //           }) => {
  //             return (
  //               <li key={coin.id}>
  //                 <div>
  //                   <img src={coin.image.small} alt="" />
  //                   <p className="name">{coin.name}</p>
  //                   <p className="symbol">{coin.symbol}</p>
  //                 </div>
  //               </li>
  //             );
  //           }
  //         )}
  //       </ol>
  //     </article>
  //   </section>
  // );
};

export default Home;
