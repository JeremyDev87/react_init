import React from "react";
import axios from "axios";
import "../css/Home.css";

class Home extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        
    }

    render() {
        const {isLoading} = this.state;
        return (
            <section className="container">
                {
                    isLoading
                        ? (
                            <div className="loader">
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="movies">
                                <span className="loader__text">Loaded</span>
                            </div>
                        )
                }
            </section>
        )
    }
}

export default Home;
