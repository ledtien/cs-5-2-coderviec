import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import JobDetail from "./components/JobDetail.js";
import JobsList from "./components/JobsList.js";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FourthOhFourthPage from "./pages/404Page";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/jobs" exact component={JobsList} />
        <Route path="/jobs/:id" component={JobDetail} />
        <Route path="/" component={FourthOhFourthPage} />
      </Switch>
    </div>
  );
}

export default App;
