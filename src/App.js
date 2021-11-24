import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap"
import Homepage from './components/Homepage';
import Favorites from "./components/Favorites"
import NavigationBar from './components/Navbar';
import ShoppingBasket from "./components/ShoppingBasket"
import ProductPage from "./components/ProductPage"
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {




  return (
   
<>
      <Row>
        <NavigationBar />
      </Row>
      <Container className="App text-center">
      
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="favs" element={<Favorites />} />
        <Route path="cart" element={<ShoppingBasket />} />
        <Route path=":id" element = {<ProductPage  />} />
        <Route path="/about-us" element = {<Contact />} />
      </Routes>
    

      </Container>

 
 </>   
  );
}

export default App;
