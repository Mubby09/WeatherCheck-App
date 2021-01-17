import React from "react";
import Background from "./img/background3.jpg";
import "bootstrap/dist/css/bootstrap.css";

const style = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "black",
  // className="weather_result"
  textAlign: "center",
  height: "90vh",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  fontWeight: "bold",
  padding: 70,
  fontFamily: "ZCOOL XiaoWei"
};

class Weather extends React.Component {
  render() {
    const {
      city,
      country,
      temperature,
      feels_like,
      humidity,
      description,
      wind,
      error
    } = this.props;

    return (
      <div style={style}>
        <div className="container">
          {" "}
          <div className="container">
            {city && country && (
              <p className="card mb-2 p-2 bg-success">
                <i className="fa fa-compass fa-2x"></i> LOCATION : {city},{" "}
                {country}{" "}
              </p>
            )}
            <hr />{" "}
            {temperature && (
              <p className="card mb-2 p-2 bg-info">
                <i class="fa fa-cloud fa-2x"></i>TEMPERATURE : {temperature}{" "}
                DEGREES CELCIUS
              </p>
            )}
            <hr />{" "}
            {feels_like && (
              <p className="card mb-2 p-2 bg-info">
                <i class="fa fa-cloud fa-2x"></i>FEELS_LIKE: {feels_like}{" "}
                DEGREES CELCIUS
              </p>
            )}
            <hr />{" "}
            {description && (
              <p className="card mb-2 p-2 bg-primary">
                <i className="fa fa-tag fa-2x"></i> DESCRIPTION : {description}{" "}
              </p>
            )}{" "}
            <hr />
            {humidity && (
              <p className="card mb-2 p-2 bg-light">
                <i className="fa fa-dewpoint"></i> HUMIDITY : {humidity} %
              </p>
            )}{" "}
            {wind && (
              <p className="card mb-2 p-2 bg-secondary">
                <i class="fa fa-wind"></i> WIND-SPEED : {wind} MPH
              </p>
            )}{" "}
            <hr />{" "}
            {error && (
              <p className="card mb-3 p-5 bg-danger">
                <i className="fa fa-exclamation-triangle fa-2x"></i>ERROR:{" "}
                {error}
              </p>
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
