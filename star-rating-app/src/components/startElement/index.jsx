import { useState } from "react";
import { RiStarSmileLine } from "react-icons/ri";
export default function StartElement({ starNum }) {
  const [overStar, setOverStar] = useState(-1);
  const [onClickStar, setOnClickStar] = useState(false);
  const [starClicked, setStarClicked] = useState(-1);
  function handleOverStar(index) {
    setOverStar(index);
  }

  function handleMouseLeave(index) {
    if (!onClickStar) {
      setOverStar(-1);
    }
    setOverStar(starClicked);
  }

  function handleOnClick(index) {
    setOnClickStar(true);
    setStarClicked(index);
    setOverStar(index);
  }
  return (
    <div>
      {[...Array(starNum)].map((item, index) => (
        <RiStarSmileLine
          key={index}
          color={index <= overStar ? "yellow" : "black"}
          onMouseOver={() => handleOverStar(index)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleOnClick(index)}
          size="3em"
        />
      ))}
    </div>
  );
}
