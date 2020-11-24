import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import Details from './components/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
   <>
     <Router>
   <Navbar />
   <Route
    path="/"
    exact
    render={(
      props 
    ) => <Home title="Tv shows" {...props} />} 
  />
   <Route
    path="/details/:id"
    exact
    // render={(props) => (
    //   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
    // )}
    render={(
      props // props are history, location, match
    ) => <Details title="Details" {...props} />} // in this way you can pass your own props along with the router ones
  />
   <MyFooter/>
   </Router>
   </>

  )}

  export default App;

/*
  <Router>
  <NavBar title="Strivestaurant" />
  <Route
    path="/"
    exact
    // render={(props) => (
    //   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
    // )}
    render={(
      props // props are history, location, match
    ) => <Home title="Stefano" {...props} />} // in this way you can pass your own props along with the router ones
  />
  <Route path="/reservation" exact component={Reservations} />
  <Route path="/details/:stefano" component={DishDetails} />
</Router>*/