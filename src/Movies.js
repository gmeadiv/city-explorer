import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Movie extends React.Component {
  render() {
    const movies = this.props.movies;
    // console.log(movies, '<---- THIS MOVIES PROPS LOG ---<<<');
    return (
      <Container>
        <h3>MOVIES PLACEHOLDER</h3>
        <Row xs={1} sm={2} md={3} lg={4}>
          {movies.map((movie, index) => (
            <Col key={index}> 
              <h4>{movie.original_title}</h4>
              <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="this movie's poster" rounded="true" fluid="true" />
            <ul>
              <li>Average Vote: {movie.vote_average}</li> 
              <li>Total Votes: {movie.vote_count}</li>
              <li>Popularity Score: {movie.popularity}</li>
              <li>Release Date: {movie.release_date}</li> 
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