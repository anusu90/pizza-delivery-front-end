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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Nav></Nav>
          <Homeslider></Homeslider>
          <Info></Info>
        </Switch>
      </Router>
    </>
  );
}

export default App;
