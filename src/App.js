import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Middle from "./middle/Middle";
import Home from "./components/Home";
import { Logout } from "./components/Logout";

function App() {
       
  return (
    <div>
      <Container>
        <BrowserRouter>
        
          <Routes>
          <Route exact path='/' element={<Middle />}></Route>

         <Route exact path='/Home' element={<Home />}></Route>
         <Route exact path='/Logout' element={<Logout/>}></Route>

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;