import Header from "./sections/Header";
import "./App.css";
// import FrontPage from "./sections/FrontPage";
// import { useDispatch } from "react-redux";
import { useState } from "react";
// import { updateArt } from "./actions";
import Wallet from "./sections/Wallet";
import ProductPage from "./sections/ProductPage";

function App() {
  // const dispatch = useDispatch();
  // const [arts,setArts] = useState([]);
  // const [eth, setEth] = useState(null);
  const [page, setPage] = useState("wallet");

  // useEffect(() => {
  //   fetch("/assets/database.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArts(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />
      {page === "wallet" ? (
        <Wallet setPage={setPage} />
      ) : (
        <ProductPage setPage={setPage} />
      )}
    </div>
  );
}

export default App;
