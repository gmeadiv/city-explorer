import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Movie extends React.Component {
  render() {
    console.log(this.props, '<---- THIS DOT PROPS TWO')
    const movies = this.props;
    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {movies.map((movie, index) => (<Col key={index}><Movie title={movie.original_title} overview={movie.overview} avgVotes={movie.vote_average} totalVotes={movie.vote_count} popularity={movie.popularity} releaseDate={movie.release_date}/>
          </Col>))}
        </Row>
      </Container>
    )
  }
}

export default Movie;