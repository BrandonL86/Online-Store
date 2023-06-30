
import './App.css';
import { React } from "react";
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import QuantityPicker from './components/quantityPicker';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Catalog/>
        {/* <QuantityPicker/> */}
        <br></br>
        <Footer/>

    </div>
  );
}

export default App;
