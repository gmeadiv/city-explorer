import React from 'react';
import Container from 'react-bootstrap/Container';

class Movie extends React.Component {
  render() {
    console.log(this.props.movies, '<---- THIS WEATHER PROPS LOG ---<<<')
    // if (!this.props.forecast.data) return null;
    return(
      <Container>
          <h3>Movies containing the name: {}:</h3>
          {/* <ul>
            <li id="forecast_date">{this.props.forecast.datetime} </li>
            <li id="forecast_description">{this.props.forecast.weather.description}</li>
          </ul> */}
      </Container>
    )
  }
}

export default Movie;