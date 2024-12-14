import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
};

export default App;
