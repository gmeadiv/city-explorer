import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Movie extends React.Component {
  render() {
    const movies = this.props.movies;
    console.log(movies[0].poster_path, '<---- THIS MOVIES PROPS LOG ---<<<');
    return (
      <Container>
        <h4>MOVIES PLACEHOLDER</h4>
        <Row xs={1} sm={2} md={3} lg={4}>
          {movies.map((movie, index) => (
            <Col key={index}>
            <ul> 
              <li>{movie.original_title}</li>
              <li>{movie.overview}</li>
            </ul>
            {/* <img src={movie.poster_path} alt="this movie's poster" rounded fluid/> */}
            <ul>
              <li>{movie.vote_average}</li> 
              <li>{movie.vote_count}</li>
              <li>{movie.popularity}</li>
              <li>{movie.release_date}</li> 
            </ul>
          </Col>))}
        </Row>
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