import React from "react";
import "./App.css";
class Form extends React.Component {
  render() {
    const { getWeather } = this.props;
    return (
      // or instead of using the above syntax, you can simply do this for the opening form tag "<form onSubmit ={this.props.getWeather}".

      <div className="form-group">
        <div className="container">
          <form onSubmit={getWeather}>
            <input
              className="form-control mb-3"
              type="text"
              name="City"
              placeholder="City"
            />
            <input
              className="form-control"
              type="text"
              name="Country"
              placeholder="Country"
            />
            <br />
            <hr />
            <button className="btn btn-outline-primary" type="submit">
              CHECK WEATHER
            </button>
            <a
              href="https://mylocationfinderapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger"
              type="submit"
            >
              LOCATION FNDER APP
            </a>
            <a
              href="https://worddefinition.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success"
              type="submit"
            >
              WORD DEFINITION APPLICATION
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
