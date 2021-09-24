import React from 'react';
import Container from 'react-bootstrap/Container';

class Weather extends React.Component {
  render() {
    // console.log(this.props.forecast, '<---- THIS WEATHER PROPS LOG ---<<<')
    // if (!this.props.forecast.data) return null;
    return(
      <Container>
          <h3>Weather Forecast for {this.props.forecast.city_name}:</h3>
          <ul>
          <li id="forecast_date">{this.props.forecast.datetime} </li>
          <li id="forecast_description">{this.props.forecast.weather.description}</li>
          </ul>
      </Container>
    )
  }
}

export default Weather;