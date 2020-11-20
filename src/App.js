import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MyFooter from "./components/footer"
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <Navbar />
   <MovieList/>
   <MyFooter/>
   </>

  )}

  export default App;