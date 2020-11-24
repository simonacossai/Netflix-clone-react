import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import Details from './components/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import JumbotronComponent from './components/Jumbotron';

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
    ) => <JumbotronComponent {...props} />} 
  />
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
    render={(
      props 
    ) => <Details title="Details" {...props} />} 
  />
   <MyFooter/>
   </Router>
   </>

  )}

  export default App;