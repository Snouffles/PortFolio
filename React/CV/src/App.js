import logo from './logo.svg';
import './App.css';

function App() {
  
  const weather = {
    temperature : {
      value: 19,
      unit : "celsius"
    },
    description: "few cloud",
    iconId : "01d",
    city: "London",
    country: "GB"
   };
  
  
  return (
    <div className="App">
      <header className="App-header">
       Weather Test 
       <div className="container">
         <div className="container__notification"></div>
         <div className="container__icon">{weather.iconId}</div>
         <div className="container__temperature--value">{weather.temperature.value} {weather.temperature.unit === "celsius" ? "°C" : "°F"}</div>
         <div className="container__temperature--description">{weather.description}</div>
         <div className="container__notification--location">{weather.city}, {weather.country}</div>
       </div>
      </header>
    </div>
  );
}

export default App;
