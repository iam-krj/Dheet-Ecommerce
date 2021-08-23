import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Bids = () => {
  // const [rank, setRank] = useState(1);
  // const rank = []
  // BidsData.map((item, index) => {
  //   rank.push(item.bidamt)
  // })
  // rank.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log(rank)
  const products = useSelector((state) => state.products);
  const userBids = useSelector((state) => state.userBids);
  const styleArray = [
    "table-primary",
    "table-secondary",
    "table-success",
    "table-info",
    "table-warning",
  ];
  console.log(products, userBids);
  return (
    <div
      className="your-bids"
      style={{ height: "100vh", width: "80vw", margin: "0 auto" }}
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Highest Bidder</th>
            <th scope="col">bidamt</th>
            <th scope="col">Expires-in</th>
          </tr>
        </thead>
        <tbody>
          {userBids.map((item, index) => {
            return (
              <tr
                className={styleArray[index % styleArray.length]}
                key={index}
                style={{ border: "1px solid black", borderRadius: "15px" }}
              >
                <img
                  src={products[item.productId - 1].Image}
                  alt="item"
                  style={{ height: "222px", width: "154px" }}
                ></img>
                <td>You</td>
                <td>{item.bid}</td>
                <td>25th August</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
