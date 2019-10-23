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
  height: "85vh",
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
      humidity,
      description,
      error
    } = this.props;

    return (
      <div style={style}>
        <div className="container">
          {" "}
          <div className="container">
            {city && country && (
              <p className="card mb-2 p-2 bg-success">
                LOCATION : {city}, {country}{" "}
              </p>
            )}
            <hr />{" "}
            {temperature && (
              <p className="card mb-2 p-2 bg-info">
                TEMPERATURE : {temperature}{" "}
              </p>
            )}
            <hr />{" "}
            {humidity && (
              <p className="card mb-2 p-2 bg-light">HUMIDITY : {humidity} </p>
            )}{" "}
            <hr />{" "}
            {description && (
              <p className="card mb-2 p-2 bg-primary">
                DESCRIPTION : {description}{" "}
              </p>
            )}{" "}
            <hr />
            {error && (
              <p className="card mb-3 p-5 bg-danger">ERROR: {error}</p>
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
