import Button from "../common/Button";

function Cheers({ count, setCount }) {
  const calCount = (action) => {
    if (action == "plus" && count < 100) setCount(count + 1);
    if (action == "minus" && count > 1) setCount(count - 1);
  };
  return (
    <div className="main-contentWrapper">
      <div className="main-ment">
        Oh my... 지친 개발자 {count}에게
        <br />
        커피를 사주는 당신의 눈동자에
        <br />치 ★ 얼 ☆ 쓰 -
      </div>
      <div className="main-content">
        <img className="cheers-icon" src="img/cheers_test.png" />
        <div className="main-coffeCount1">
          <img className="coffee-icon" src="img/coffee_test.png" />
          <div className="main-coffeCount1-text">X {count}</div>
        </div>
        <div className="main-coffeCount2">
          <div className="main-coffeCount2-text">
            {count}커피 = {(0.01 * count).toFixed(2)}ether
          </div>
        </div>
        <div className="main-countButton">
          <Button
            text="−"
            color="lightskyblue"
            icon
            onClick={() => calCount("minus")}
          />
          <Button text={count} wide />
          <Button text="+" color="pink" icon onClick={() => calCount("plus")} />
        </div>
        <div className="main-registerButton">
          <Button text="커피로 응원하기" wide />
        </div>
      </div>
    </div>
  );
}

export default Cheers;
