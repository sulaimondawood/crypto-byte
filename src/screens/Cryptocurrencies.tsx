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
          const { symbol, name, id } = dat;

          return (
            <div key={dat.id}>
              <img src={dat.image.small} alt="" />
              <p className="name">{dat.name}</p>
              <p className="symbol">{dat.symbol}</p>
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
