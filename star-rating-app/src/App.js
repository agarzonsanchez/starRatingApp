import logo from "./logo.svg";
import "./App.css";
import StarRatingApp from "./components/mainComponent";

function App() {
  return (
    <div className="App">
      <StarRatingApp
        starNum={10}
        
      />
    </div>
  );
}

export default App;
