import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const key = "c2b9eaac541af9d4f01b1f0100f028f4";

class App extends Component {
  state = {
    temperature: undefined,
    feels_like: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: ""
  };

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.City.value;
    const country = event.target.elements.Country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: (data.main.temp - 273.15).toFixed(0),
        feels_like: (data.main.feels_like - 273.15).toFixed(0),
        city: data.name.toUpperCase(),
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].main.toUpperCase(),
        wind: data.wind.speed,
        error: ""
      });
    } else {
      console.log("Give me a CITY and a COUNTRY");
      this.setState({
        temperature: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please give me a CITY and COUNTRY...."
      });
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          feels_like={this.state.feels_like}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
