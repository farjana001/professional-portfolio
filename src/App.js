import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AboutMe from './Components/Home/AboutMe/AboutMe';
import Contact from './Components/Home/Contact/Contact';
import Resume from './Components/Home/Resume/Resume';
import Projects from './Components/Home/Projects/Projects';
import Menubar from './Components/Home/Menubar/Menubar';


function App() {
  return (
    <Router>
      <Menubar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/about">
        <AboutMe />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
