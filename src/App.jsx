import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log();
  };

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
