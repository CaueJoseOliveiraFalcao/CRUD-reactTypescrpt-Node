
import React, { Fragment } from "react";
import { BrowserRouter as Router , Route , Link} from "react-router-dom";
import Home from "./pages/Home/Home";
import Narvbar from './components/Navbar'
export default function App() {
  return (
    <main>
      <Narvbar/>
    </main>
  );
}
