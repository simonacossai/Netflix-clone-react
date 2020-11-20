import React from "react";
import { Button, Card, Col} from "react-bootstrap";
import './SingleMovie.css';

class SingleProduct extends React.Component {
  render(props) {
    return (
    <Col md={2}>
        <div>
        <Card.Img fluid variant="top" src={this.props.movie.Poster} className="moviePoster"/>
        <p style={{color: "#fff"}}>{this.props.movie.Title}</p>
        </div>
      </Col>
    );
  }
}

export default SingleProduct;