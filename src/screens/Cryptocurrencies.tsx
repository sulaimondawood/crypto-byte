import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import "./Cryptocurrencies.css";
interface IData {
  dat: {};
  name: string;
  symbol: string;
  id: string;
  image: {
    small: string;
  };
  market_data: {
    price_change_24h: number;
    market_cap_change_24h: number;
    price_change_percentage_24h: number;
  };
}

const Cryptocurrencies = () => {
  const { data } = useSelector((state: any) => state.cryptoCurrencies);
  const { isLoading } = useSelector((state: any) => state.cryptoCurrencies);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="currency">
      <article>
        {data.map((dat: IData) => {
          const { symbol, name, id, market_data } = dat;
          const {
            price_change_24h,
            market_cap_change_24h,
            price_change_percentage_24h,
          } = market_data;

          return (
            <div key={dat.id}>
              <div className="img-name">
                <img src={dat.image.small} alt="" />
                <p className="name">{dat.name}</p>
                <p className="symbol">{dat.symbol}</p>
              </div>
              <p className="daily">Daily Change:{price_change_24h}</p>
              {/* <p className="daily">{price_change_24h}</p> */}
              <p className="daily">
                Market Change:{market_cap_change_24h.toFixed(1)}
              </p>

              <Link
                target="_blank"
                className="link"
                to={`/cryptocurrency/${dat.id}`}
              >
                Click here for more details
              </Link>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Cryptocurrencies;
