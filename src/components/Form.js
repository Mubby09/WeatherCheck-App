import React from "react";
import "./App.css";
class Form extends React.Component {
  render() {
    const { getWeather } = this.props;
    return (
      // or instead of using the above syntax, you can simply do this for the opening form tag "<form onSubmit ={this.props.getWeather}".

      <div className="form">
        <div className="container">
          <form onSubmit={getWeather}>
            <input type="text" name="City" placeholder="City" />
            <input type="text" name="Country" placeholder="Country" />
            <br />
            <hr />
            <button type="submit">CHECK WEATHER</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
