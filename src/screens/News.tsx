import { useSelector } from "react-redux";
import "./News.css";
import Spinner from "../assets/spinner.png";
const News = () => {
  const { isCryptoNewsLoading } = useSelector((state: any) => state.cryptoNews);
  const { data: news } = useSelector((state: any) => state.cryptoNews);

  if (isCryptoNewsLoading) {
    return <img className="spinner" src={Spinner} alt="" />;
  }
  return (
    <section className="news-section">
      <h1>Latest News</h1>
      <div className="new-row">
        {news.map((item: any) => {
          return (
            <div className="news-item">
              <h4>{item.title}</h4>
              <a target="_blank" rel="noreferrer" href={item.url}>
                Read news
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default News;
