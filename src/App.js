import Header from './sections/Header';
import './App.css';
import FrontPage from './sections/FrontPage';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { updateArt } from "./actions";


function App() {
  const dispatch = useDispatch();
  const [arts, setArts] = useState([]);

  useEffect(() => {
    dispatch(updateArt);
    fetch("/assets/database.json")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
      });
  }, []);
  
  return (
    <div className="App">
      <Header />
      <FrontPage arts={arts} />
    </div>
  );
}

export default App;
