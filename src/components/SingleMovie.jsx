import React from "react";
import { Button, Card, Col} from "react-bootstrap";
import './SingleMovie.css';
import ModalForm from "./Modal";

class SingleProduct extends React.Component {
  render(props) {
    return (
    <Col md={2}>
        <div className="wrapper">
        <Card.Img fluid variant="top" src={this.props.movie.Poster} className="moviePoster"/>
        <p style={{color: "#fff"}} className="title">{this.props.movie.Title}</p>
        <ModalForm
            btn={"add review"}
            method={"PUT"}
            data={this.props.movie.Poster}
            refetchData={() => this.props.refetchData()}
          />
        </div>
      </Col>
    );
  }
}

export default SingleProduct;