import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CommentForm from "./message"

class ModalForm extends React.Component {
  state = {
    show: false,
    movies: this.props.data ? this.props.data : {},
  };

  onChangeHandler = (e) => {
    this.setState({
      movies: {
        ...this.state.movies,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = async () => {
    const url =
      this.props.method === "PUT"
        ? "https://striveschool-api.herokuapp.com/api/product/" +
          this.props.data._id
        : "https://striveschool-api.herokuapp.com/api/product/";
    try {
      const response = await fetch(url, {
        method: this.props.method,
        body: JSON.stringify(this.state.movies),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjhlNjk4MzViMDAwMTc1ODRlZTciLCJpYXQiOjE2MDU3ODk5MjYsImV4cCI6MTYwNjk5OTUyNn0.4C10FpKd6Z_zglQM7bO9F87KNlDxjd5t-7JQnKV6WR0",
        }),
      });
      if (response.ok) {
        alert("ok");
        this.props.refetchData();
        this.setState({ show: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Button variant="success" onClick={() => this.setState({ show: true })}>
          {this.props.btn}
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CommentForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" >
              Post data
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalForm;