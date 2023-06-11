import { useState } from "react";
import RegexParser from "regex-parser";

import Pin from "@/components/Pin";

const Home = () => {
  const [pin, setPin] = useState("");
  const [pinLength, setPinLength] = useState(5);
  const [pinRegex, setPinRegex] = useState("/^\\d+$/");
  const [isSecretMode, setSecretMode] = useState(false);
  const [loading, setLoading] = useState();

  return (
    <div className="pin-container">
      <h1 className="main-title">PIN Input</h1>
      <Pin
        value={pin}
        length={pinLength}
        isSecret={isSecretMode}
        regex={pinRegex ? new RegExp(RegexParser(pinRegex)) : ""}
        onChange={setPin}
      />
      <div className="pin-config-container">
        <h3>PIN Configuration</h3>
        <ul>
          <li>
            <label>PIN Length</label>
            <input
              type="number"
              value={pinLength}
              onChange={(e) => setPinLength(parseInt(e.target.value, 10))}
            />
          </li>
          <li>
            <label>PIN Regex</label>
            <input
              type="text"
              value={pinRegex}
              onChange={(e) => setPinRegex(e.target.value)}
            />
          </li>
          <li>
            <label>Secret Mode</label>
            <input
              type="checkbox"
              checked={isSecretMode}
              onChange={(e) => setSecretMode(!isSecretMode)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;