// import React from 'react';
// import axios from 'axios';

// import Weather from './weather.js';

// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',
//       location: '',
//       latitude: '',
//       longitude: '',
//       forecast: [],
//       error: false,
//     }
//   }

//   getLocation = async () => {
//     const locationURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

//     try {
//       const response = await axios.get(locationURL);
//       console.log(response, '<---- AM I CONNECTED?? ---<<<');
//       const location = response.data[0].display_name;
//       const latitude = response.data[0].lat;
//       const longitude = response.data[0].lon;

//       this.setState({
//         location, // or location:location
//         latitude,
//         longitude,
//         error: false,
//       });
//       } catch (error) {

//       console.error('Unable to find city', 
//       this.state.searchQuery);

//       this.setState({ error: true });
//     }
//     this.getThreeDayForecast(this.latitude, this.longitude);
//   };

//   getTestButton = e => {
//     this.setState({
//       searchQuery: e.target.value,
//     });
    
//   }

//   getThreeDayForecast = async (latitude, longitude) => {
//     try {
//       const API = 'http://localhost:3001';
//       const threeDayForecast = await axios.get(`${API}/forecast`, {params: {searchQuery: this.state.searchQuery, latitude: latitude, longitude: longitude}});
//       this.setState({
//         forecast: threeDayForecast.data
//       });

//     } catch(error) {
//       console.log(error, '<---- ERROR LOG ---<<<');
//     }
//   }

//   changeHandler = (event) => this.setState({ searchQuery: event.target.value });

//   render() {
//     return (
//       <>
//         <input onChange={this.changeHandler} placeholder="search for a city"></input>
//         <Button onClick={(event) => this.getLocation(event)} variant="warning">Explore!</Button>

//         {/* falsy: false, 0, 0.0, null, undefined, NaN, '' */}

//         {this.state.location &&
//           <>
//           <ul>
//           <li>City Name: {this.state.location.display_name}</li>
//           <li>Latitude: {this.state.latitude}</li>
//           <li>Longitude: {this.state.longitude}</li>
//           </ul>
//           <h3>Map:</h3>
//           <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.429fe5d05e82b46d41d445914dfbab1b&center=${this.state.latitude},${this.state.longitude}&zoom=12`} alt={this.state.location.display_name} rounded />
//           <Weather forecast={this.state.forecast} name={this.state.searchQuery} />
//           </>
//         }

//         {
//           this.state.error &&
//           <Container>
//           <h2>Oh No Pinocchio!</h2>
//           <Image src={`https://upload.wikimedia.org/wikipedia/commons/9/94/Pinocchio_1940.jpg`} alt="A Picture of Pinocchio" rounded fluid/>
//           </Container> 
//         }
//       </>
//     )
//   }
// }


// export default App;
