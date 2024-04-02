import useAxios from "../hooks/useAxios";
import Coin from "./Coin";

const Markets = () => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );

  return (
    <section className="mt-8 ">
      <h1 className="text-2xl mb-2 ">Markets</h1>
      <div className="flex items-center gap-1 w-full font-semibold mb-2">
        <p>Coin Name</p>
        <p className="pl-64">Price</p>
        <p className="pl-32">Price Change</p>
        <p className="pl-36">Market Cap</p>
      </div>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Markets;
