import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="wrapper bg-dark">
        <div className="container">
          <h1 className="text-success">
            <i>Weather Finder</i>
          </h1>
          <hr />
          <h5>Find out temperature, conditions and more</h5>
        </div>
      </div>
    );
  }
}

export default Title;
