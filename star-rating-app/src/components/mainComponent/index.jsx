import { RiStarSmileLine } from "react-icons/ri";
import StartElement from "../startElement";

export default function StarRatingApp({ starNum = 5 }) {
  return (
    <div>
      <div>
        <div>
          <h1>Star Rating App</h1>
        </div>
        <div>
          <StartElement starNum={starNum} className="starStyle" />
        </div>
      </div>
    </div>
  );
}
