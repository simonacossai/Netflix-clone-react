import React from 'react';
import { Container, Row, Col, Card, FormControl } from "react-bootstrap";
import SingleMovie from './SingleMovie';


class MovieList extends React.Component {
    state = {
        titles:["batman", "superman", "titanic", "Harry Potter"],
        movies:[],
        array: [],
    }

      fetchMovies = async (titles) => {
        try {
          const response = await fetch("http://www.omdbapi.com/?apikey=ada5e6d6&s="+ titles,
            {
              method: "GET",
            }
          );
          if (response.ok) {
            const data = await response.json();
            this.state.array.push(...data.Search);
            console.log(this.state.array);
            this.setState({ movies: this.state.array });
            console.log("state", this.state.movies);
          }
        } catch (e) {
          console.log(e);
        }
      };
      componentDidMount = async () => {  
        {this.state.titles.forEach((movie) => (
            this.fetchMovies(movie)
        ))}
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