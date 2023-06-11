import { useEffect, useState } from "react";
import RegexParser from "regex-parser";

import Pin from "@/components/Pin";
import axios from "axios";
import SuccessIcon from "@/components/SuccessIcon";
import ErrorIcon from "@/components/ErrorIcon";

const Home = () => {
  const [pin, setPin] = useState("9999");
  const [pinLength, setPinLength] = useState(4);
  const [pinRegex, setPinRegex] = useState("/^\\d+$/");
  const [isSecretMode, setSecretMode] = useState(false);
  const [loading, setLoading] = useState();
  const [status, setStatus] = useState("");

  // useEffect(() => {
  //   if (pin?.length === pinLength) {
  //     verifyPinCode(pin);
  //   }
  // }, [pinLength, pin]);

  const verifyPinCode = (value: any) => {
    axios
      .post(
        "https://riokidstore.online/input-pin/",
        { pin: value, n_pin: pinLength },
        {
          headers: {
            "Content-Type": "application/json",
            "X-HTTP-Device-Type": "server",
          },
        }
      )
      .then((response) => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <div className="pin-container">
      <h1 className="main-title">PIN Input</h1>
      <div className="">
        <Pin
          value={pin}
          length={pinLength}
          isSecret={isSecretMode}
          regex={pinRegex ? new RegExp(RegexParser(pinRegex)) : ""}
          onChange={setPin}
        />

        <button className="button-submit" onClick={() => verifyPinCode(pin)}>
          Verify
        </button>
        <div className="request-status-container">
          {status === "success" && <SuccessIcon />}
          {status === "error" && <ErrorIcon />}
        </div>
      </div>
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
