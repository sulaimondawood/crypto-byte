import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import "./Exchanges.css";
interface IEprops {
  item: {};
  id: string;
  name: string;
  image: string;
  trade_volume_24h_btc: string;
  year_established: number;
  trust_score_rank: number;
}
const Exchanges = () => {
  const { data } = useSelector(
    (state: { exchanges: { data: [] } }) => state.exchanges
  );
  const { isLoading } = useSelector(
    (state: { exchanges: { isLoading: boolean } }) => state.exchanges
  );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="exchanges-section ">
      <div className="col">
        <h4>Exchanges</h4>
        <h4>24h Trade Volume</h4>
        <h4>Markets</h4>
        <h4>Change</h4>
      </div>
      <div className="exchanges-row">
        {data.map((item: IEprops) => {
          return (
            <li className="list">
              <div>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
              <p className="24h">{item.trade_volume_24h_btc}</p>
              <p className="year">{item.year_established}</p>
              <p className="rank">{item.trust_score_rank}</p>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default Exchanges;
