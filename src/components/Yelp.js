import React from 'react';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

class Yelp extends React.Component {
  render() {
    const yelp = this.props;
    console.log(yelp, '<---- WHAT IS PASSED TO YELP COMPONENT ---<<<')
    return (
      <Container>
        <h1>placeholder</h1>
        {/* <Row xs={1} sm={2} md={3} lg={4}>
          {movies.map((movie, index) => (
          <Col key={index}>
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>
            <img src={movie.image} alt="this movie's poster" rounded="true" fluid="true" />
            <ul>
             <li>Average Vote: {movie.avgVote}</li>
             <li>Total Votes: {movie.totalVotes} </li>
             <li>Popularity: {movie.popularity}</li> 
             <li>Release Date: {movie.releaseDate}</li>
            </ul>
          </Col>))}
        </Row> */}
      </Container>
    )
  }
}

export default Yelp;