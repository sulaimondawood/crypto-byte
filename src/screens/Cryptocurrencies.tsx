import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cryptocurrencies.css";
interface IData {
  dat: {};
  name: string;
  symbol: string;
  id: string;
}

const Cryptocurrencies = () => {
  const { data } = useSelector((state: any) => state.cryptoCurrencies);
  const { isLoading } = useSelector((state: any) => state.cryptoCurrencies);
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <section className="currency">
      <article>
        {data.map((dat: IData) => {
          const { symbol, name, id } = dat;

          return (
            <div key={id} className="currencyItem">
              <p>
                <span> {name} </span>
                <span>{symbol}</span>
                <Link to={`/cryptocurrency/:${id}`}>Click here</Link>
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Cryptocurrencies;
