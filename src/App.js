import './App.css';
import Nav from "./nav/navbar"
import Homeslider from "./homeslider/homeslider"
import Info from "./info/info"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./login/login"
import Register from "./register/register"
import Menu from "./menu/menu"
import Footer from "./footer/footer"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Nav></Nav>
            <Switch>
              <Route path="/login" exact><Login /></Route>
              <Route path="/register" exact><Register /></Route>
              <Route path="/Menu" exact><Menu /></Route>
              <Homeslider />
            </Switch>
            <Footer></Footer>
            {/* <Info></Info> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
