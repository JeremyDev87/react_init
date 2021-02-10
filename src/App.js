import React from "react";
import {HashRouter,Route} from "react-router-dom";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Home from "./routes/Home";
import "./App.css";
import Navigation from "./components/Navigation"

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact={true} component={About} />
            <Route path="/movie/:id" exact={true} component={Detail} />
        </HashRouter>
    );
}

export default App;