import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input])
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => {
        setHasLiked(!hasLiked);
      }}>{hasLiked?'❤️':"🤍"}</button>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => {
  
  return (
    <div className="card-container">
      <Card title="minion" />
      <Card title="id invaded" />
    </div>
  );
};

export default App;
