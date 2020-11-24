import React from 'react'
import { Badge, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import MovieComments from './MovieComments';
import './Details.css';

class MovieDetails extends React.Component {
    state = {
        movie: null
    }

    componentDidMount=async()=> {
        let movieIdFromTheSearchBar = this.props.match.params.id;
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=ada5e6d6&i="+ movieIdFromTheSearchBar,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let selectedMovie = await response.json()
              this.setState({
                  movie: selectedMovie
              })
            } else {
                console.log("error during fetch")
            }
        } catch (e) {
            console.log(e);
        }
    }

    render(props) {
        
        return (
            <Container className="d-flex justify-content-center align-items-center text-center mt-5">
                {this.state.movie &&
                    <div>
                        <Row className="my-2">
                            <Col md={4}>
                                <img src={this.state.movie.Poster} alt="movie" className="img-fluid" />
                            </Col>
                            <Col md={8}>
                                <Card className="details-card">
                                    <Card.Body>
                                        <Card.Title>{this.state.movie.Title} <Badge variant="danger" className="badge ml-3">{this.state.movie.imdbRating}</Badge></Card.Title>
                                
                                        <Card.Text className="d-flex justify-content-start text-left mt-3">
                                            {this.state.movie.Plot}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <MovieComments id={this.state.movie.imdbID}/>
                    </div>}
                {!this.state.movie &&   <Spinner animation="grow" variant="danger" className="mt-5 d-flex justify-content-center align-items-center text-center" />
}
            </Container>
        )
    }
}

export default MovieDetails
