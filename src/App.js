import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import ModalForm from "./components/Modal"


function App() {
  return (
   <>
   <Navbar />
   <ModalForm/>
   <MovieList/>
   <MyFooter/>
   </>

  )}

  export default App;