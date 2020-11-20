import React from "react";
import { Button, Card, Col} from "react-bootstrap";

class SingleProduct extends React.Component {
  render(props) {
    return (
    <Col md={2}>
      <Card>
        <Card.Img variant="top" src={this.props.movie.Poster} />
      </Card>
      </Col>
    );
  }
}

export default SingleProduct;