import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";

// import FlameApp from "./FlameApp.js"

const FlameApp = () => {
  const flameobj = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings",
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [answer, setAnswer] = useState("");

  const imgcheck = (
    <div className="bottom">
      <h3 style={{ color: "red" }}> ❕ Please Enter Valid Input </h3>
      <img
        className="gif"
        src="https://media.tenor.com/3VRjsijNpDoAAAAj/yaseen.gif"
        alt=""
      />
    </div>
  );
  const Aafat = (
    <div className="bottom">
      <h3>Aafat 🤭 </h3>
      <img
        className="gif"
        src="https://media.tenor.com/GQD8ybRi2O8AAAAi/mochi-cute.gif"
        alt=""
      />
    </div>
  );
  const Friends = (
    <div className="bottom">
      <h3>Friends </h3>
      <img
        className="gif"
        src="https://media.tenor.com/Hm_BP5GWHUIAAAAj/happy.gif"
        alt=""
      />
    </div>
  );
  const Siblings = (
    <div className="bottom">
      <h3>Siblings </h3>
      <img
        className="gif"
        src="https://media.tenor.com/3evxGIB0_TgAAAAj/canticos-chickie.gif"
        alt=""
      />
    </div>
  );

  const Married = (
    <div className="bottom">
      <h3>Married </h3>
      <img
        className="gif"
        src="https://media.tenor.com/j5HkTUwkjAoAAAAj/sportsmanias-animated-emojis.gif"
        alt=""
      />
    </div>
  );
  const Enemies = (
    <div className="bottom">
      <h3>Enemies </h3>
      <img
        className="gif"
        src="https://media.tenor.com/Dmk0gNMX7P0AAAAi/aliceanimated-alicestickers.gif"
        alt=""
      />
    </div>
  );
  const Lovers = (
    <div className="bottom">
      <h3>Lovers </h3>
      <img
        className="gif"
        src="https://media.tenor.com/lHhcvy0Zwv0AAAAj/cute-adorable.gif"
        alt=""
      />
    </div>
  );

  function clearHandler() {
    setInput1("");
    setInput2("");
    setAnswer("");
  }
  function handleChangeInput1() {
    setInput1(event.target.value);
  }
  function handleChangeInput2() {
    setInput2(event.target.value);
  }
  function calculate() {
    // return "abc";
    const str = input1.toLowerCase() + input2.toLowerCase();

    // convert the string to an array of characters
    const arr = str.split("");

    // use the Set data structure to remove duplicates
    const uniqueArr = [...new Set(arr)];

    // convert the array back to a string
    const uniqueStr = uniqueArr.join("");
    console.log(uniqueStr);

    let ans = uniqueStr.length % 6;

    if (str.length === 0) {
      return setAnswer(imgcheck);
    }

    console.log(ans);
    switch (ans) {
      case 1:
        setAnswer(Friends);
        break;
      case 2:
        setAnswer(Lovers);
        break;
      case 3:
        setAnswer(Enemies);
        break;
      case 4:
        setAnswer(Married);
        break;
      case 5:
        setAnswer(Aafat);
        break;
      case 0:
        setAnswer(Siblings);
        break;
      // default:
      // setAnswer("Please Enter valid input")
    }
  }

  // setAnswer(input1+input1);

  return (
    <>
      <h1 className="flamegame">😛 FLAME Game 🎲</h1>

      <div className="main">
        <h2>🖐 Your Name </h2>
        <input
          className="input1"
          name="name1"
          data-testid="input1"
          type="text"
          id="input1"
          value={input1}
          onChange={handleChangeInput1}
        />
        <h2> 🤞 Your Crush Name </h2>
        <input
          className="input2"
          name="name2"
          data-testid="input2"
          type="text"
          id="input1"
          value={input2}
          onChange={handleChangeInput2}
        />
        <div className="btns">
          <button
            data-testid="calculate_relationship"
            onClick={() => {
              setAnswer(calculate);
            }}
            className="relBtn"
          >
            Calculate Future Relationship
          </button>

          <button
            className="clearbtn"
            data-testid="clear"
            onClick={clearHandler}
          >
            Clear
          </button>
        </div>
        {/* <br> */}
        <h3 data-testid="answer">{answer}</h3>
        {/* <img className="gif" src = "https://media.tenor.com/kMzBmSFsdIEAAAAi/sportsmanias-just-married.gif" alt=""/> */}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FlameApp />
  // <div>
  // </div>
);
