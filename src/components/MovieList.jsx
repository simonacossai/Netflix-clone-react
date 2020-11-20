import React from 'react';
import { Container, Row, FormControl } from "react-bootstrap";
import SingleMovie from './SingleMovie';
import './MovieList.css';


class MovieList extends React.Component {
    state = {
        titles:["batman", "superman", "Harry Potter"],
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
                <Container fluid className=" justify-content-center mt-3 mx-0 mb-5" style={{overflowX: "hidden", backgroundColor: "#2c2c2c", color:"#ffff"}}>
                        <div className="d-flex align-items-center justify-content-start m-0">
                        <h2>TV SHOWS</h2>
                        <select>
                            <option>genres</option>
                        </select>
                        </div>
                   <Row className="mt-3 mb-5">
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