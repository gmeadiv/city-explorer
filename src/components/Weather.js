import React from 'react';
import Container from 'react-bootstrap/Container';

class Weather extends React.Component {
  render() {
    console.log(this.props.forecast.data, '<---- THIS WEATHER PROPS LOG ---<<<')
    return(
      <Container>
          <h3>Three Day Forecast for {this.props.name}</h3>
          {/* <ul>
            <li id="dayOne">On {this.props.forecast.data[0].date}: {this.props.forecast.data[0].description}</li>
            <li id="dayTwo">On {this.props.forecast.data[1].date}: {this.props.forecast.data[1].description}</li>
            <li id="dayThree">On {this.props.forecast.data[2].date}: {this.props.forecast.data[2].description}</li>
          </ul> */}
      </Container>
        /* {this.props.forcast &&
          <Container>
          <h3>Three Day Forecast for {this.props.name}</h3>
          <ul>
            <li id="dayOne">On {this.props.forecast[0].date}: {this.props.forecast.description}</li>
            <li id="dayTwo">On {this.props.forecast[1].date}: {this.props.forecast[1].description}</li>
            <li id="dayThree">On {this.props.forecast[2].date}: {this.props.forecast[2].description}</li>
          </ul>
          </Container>
        }

        {this.props.error &&
          <Container>
          <h2>Oh No Pinocchio!</h2>
          <Image src={`https://upload.wikimedia.org/wikipedia/commons/9/94/Pinocchio_1940.jpg`} alt="A Picture of Pinocchio" rounded fluid/>
          </Container> 
        } */
    )
  }
}

export default Weather;