import React from 'react';
import Container from 'react-bootstrap/Container';

class Movies extends React.Component {
  render() {
    console.log(this.props.forecast.data, '<---- THIS MOVIES PROPS LOG ---<<<')
    return(
      <Container>
          <h3>Three Day Forecast for {}</h3>
          {/* <ul>
            <li id="dayOne">On {this.props.forecast.data[0].date}: {this.props.forecast.data[0].description}</li>
            <li id="dayTwo">On {this.props.forecast.data[1].date}: {this.props.forecast.data[1].description}</li>
            <li id="dayThree">On {this.props.forecast.data[2].date}: {this.props.forecast.data[2].description}</li>
          </ul> */}
      </Container>
    )
  }
}

export default Movies;