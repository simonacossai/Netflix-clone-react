import React from "react";
import { Button, Card, Col} from "react-bootstrap";
import './SingleMovie.css';

class SingleProduct extends React.Component {
  render(props) {
    return (
    <Col md={2}>
        <Card.Img variant="top" src={this.props.movie.Poster} className="moviePoster"/>
      </Col>
    );
  }
}

export default SingleProduct;