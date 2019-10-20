import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./components/img";
import "./App.css";

const key = "c2b9eaac541af9d4f01b1f0100f028f4";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: ""
  };

  getWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.City.value;
    const country = event.target.elements.Country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      console.log("Give me a CITY and a COUNTRY");
      this.setState({
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
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
