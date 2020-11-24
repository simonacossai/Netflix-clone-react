import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import video from '../data/Dark.mp4'
import './Jumbotron.css';
import {BsPlayFill} from 'react-icons/bs';
import {AiFillInfoCircle} from 'react-icons/ai';

class JumbotronComponent extends React.Component {
  render(props) {
    return (
      <Jumbotron fluid style={{ height: "100vh", position: "relative" }} className="p-0 mb-0 jumbotron">
      <div
        className="d-flex align-items-center justify-content-center overlay"
        style={{
          width: "100%",
          height: "100%",
          zIndex: "0",
          overflow: "hidden",
        }}
      >
        <video src={video} autoPlay muted loop style={{ position: "relative", width: "100%" }}></video>
      </div>

      <div
        className="pl-5"
        style={{
          position: "absolute",
          zIndex: "5000",
          top: "67%",
          color: "#fff",
        }}
      >
      <h1 className="movie-title">Dark</h1>
      <div className="d-flex">
        <Button className="watch mr-3"><BsPlayFill className="mr-1" style={{fontSize:"28px"}}/>Watch</Button>
        <Button className="more"><AiFillInfoCircle className="mr-1" style={{fontSize:"28px"}}/>More info</Button>

      </div>
      </div>
    </Jumbotron>
      
    );
  }
}

export default JumbotronComponent;