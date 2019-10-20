import React from "react";
import Background from "./img/background3.jpg";

const style = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "black",
  // className="weather_result"
  textAlign: "center",
  // background: " darkturquoise",
  height: "100vh",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  fontSize: "1.7rem",
  fontWeight: "bold",
  padding: 70
};

class Weather extends React.Component {
  render() {
    const {
      city,
      country,
      temperature,
      humidity,
      description,
      error
    } = this.props;

    return (
      <div style={style}>
        <div className="container">
          {city && country && (
            <p>
              LOCATION : {city}, {country}{" "}
            </p>
          )}

          {temperature && <p>TEMPERATURE : {temperature} </p>}
          {humidity && <p>HUMIDITY : {humidity} </p>}
          {description && <p>DESCRIPTION : {description} </p>}
          {error && <p>ERROR: {error}</p>}
        </div>
      </div>
    );
  }
}

export default Weather;
