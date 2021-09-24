import React from 'react';
import Container from 'react-bootstrap/Container';

class Movie extends React.Component {
  render() {
    console.log(this.props.movies, '<---- THIS WEATHER PROPS LOG ---<<<')
    // if (!this.props.forecast.data) return null;
    return(
      <Container>
        <h1>MOVIES PLACEHOLDER</h1>
          {/* <h3> Insert Movie Title Here{}:</h3>
          <p>Insert Overview Here {}</p>
          <ul>
            <li>average_votes{this.props.movies}: </li>
            <li>total_votes{this.props.movies}:</li>
          </ul>
          <ul>
            <img src={this.props.movies} alt="image of movie"/>
            <li>popularity {this.props.movies}:</li>
            <li>released_on{this.props.movies}:</li>
          </ul> */}
      </Container>
    )
  }
}

export default Movie;