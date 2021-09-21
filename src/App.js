
import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: '',
      latitude: '',
      longitude: '',
      error: false,
    }
  }

  getLocation = async () => {
    const locationURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    try {
      const response = await axios.get(locationURL);
      const location = response.data[0].display_name;
      const latitude = response.data[0].lat;
      const longitude = response.data[0].lon;

      this.setState({
        location, // or location:location
        latitude,
        longitude,
        error: false,
      });

    } catch (error) {

      console.error('Unable to find city', 
      this.state.searchQuery);

      this.setState({ error: true });
    }
  }

  render() {

    return (
      <>
        <input onChange={(event) => this.setState({ searchQuery: event.target.value })} placeholder="search for a city"></input>
        <Button onClick={this.getLocation} variant="warning">Explore!</Button>

        {/* falsy: false, 0, 0.0, null, undefined, NaN, '' */}

        {this.state.location &&
          <>
          <ul>
          <li>City Name: {this.state.location.display_name}</li>
          <li>Latitude: {this.state.latitude}</li>
          <li>Longitude: {this.state.longitude}</li>
          </ul>
          <h3>Map:</h3>
          <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.429fe5d05e82b46d41d445914dfbab1b&center=${this.state.latitude},${this.state.longitude}&zoom=12`} alt={this.state.location.display_name} rounded />
          </>
        }

        {
          this.state.error &&
          <Container>
          <h2>Oh No Pinocchio!</h2>
          <Image src={`https://upload.wikimedia.org/wikipedia/commons/9/94/Pinocchio_1940.jpg`} alt="A Picture of Pinocchio" rounded fluid/>
          </Container> 
        }
      </>
    )
  }
}

export default App;
