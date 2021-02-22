import React from "react";
import {HashRouter,Route} from "react-router-dom";
import About from "./routes/js/About";
import Home from "./routes/js/Home";
import "./App.css";
import Navigation from "./components/Navigation"

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact={true} component={About} />
        </HashRouter>
    );
}

export default App;