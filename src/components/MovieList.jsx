import React from 'react';
import { Container, Row, Col, Card, FormControl } from "react-bootstrap";
import SingleMovie from './SingleMovie';


class MovieList extends React.Component {
    state = {
        titles:["batman", "superman"],
        titanic: ["titanic"],
        movies:[],
    }

    /*fetchMovies = async (titles) => {
        try {
          const response = await fetch("http://www.omdbapi.com/?apikey=ada5e6d6&s="+ titles, {
            method: "GET",
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(`API ERROR : ${error.message}`);
        }
      };   
      componentDidMount =async () => {
        let firstmovies= await this.fetchMovies(this.state.titles);
        this.fetchMovies(this.state.titanic);
      };*/

 

      fetchMovies = async (titles) => {
        try {
          const response = await fetch("http://www.omdbapi.com/?apikey=ada5e6d6&s="+ titles,
            {
              method: "GET",
            }
          );
          if (response.ok) {
            const data = await response.json();
            this.setState({ movies: data.Search });
            console.log("state", this.state.movies);
          }
        } catch (e) {
          console.log(e);
        }
      };
      componentDidMount = async () => {
        this.fetchMovies("batman");
      };
    


     render(props){
        return (
            <div>
                <Container className=" justify-content-center mt-3 mb-4">
                    <div className="d-flex align-items-center">
                        <h1 >Last released</h1>
                    </div>
                    <hr className="my-2" />
                    <Row className="justify-content-start mt-3">
                    {this.state.movies.map((m) => (
                            <SingleMovie movie={m} key={m.imdbID} />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MovieList;