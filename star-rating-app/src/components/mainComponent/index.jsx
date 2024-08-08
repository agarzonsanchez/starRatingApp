import StartElement from "../startElement";
import "./styles.css";

export default function StarRatingApp({ starNum = 5 }) {
  return (
    <div className="main-container">
      <div>
        <div className="title">
          <h1>Star Rating App</h1>
        </div>
        <div>
          <StartElement starNum={starNum} className="starStyle" />
        </div>
      </div>
    </div>
  );
}
