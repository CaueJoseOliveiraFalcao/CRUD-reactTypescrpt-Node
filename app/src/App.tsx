
import React, { Fragment } from "react";
import { BrowserRouter as Router , Route , Link} from "react-router-dom";
import Home from "./pages/Home/Home";
export default function App() {
  return (
    <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tarefas">Tarefas</Link></li>
        </ul>
        </nav>
        <Route path="/" exact component={Homei} />
        <Route path="/tarefas" exact component={Tarefas} />
     </main>
     </Router>
  );
}
// Home Page
const Homei = () => (
  <Fragment>
    <Home/>
  </Fragment>
  );
// About Page
const Tarefas = () => (
  <Fragment>
    <h1>Tarefas</h1>
  </Fragment>
  );