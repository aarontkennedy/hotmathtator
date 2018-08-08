import React, { Component } from 'react';
import './Home.css';
import Header from "../Header";
import Footer from "../Footer";
import GameButtonList from "../GameButtonList";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header gameMode={false}/>

                <section className="grid-container">
                    <div className="grid-x grid-margin-x grid-padding-x">
                        <div className="cell medium-7 large-offset-1 large-6 Home-Info columns Home-Columns">
                            <h1 className="text-center">Hot Mathtator is a sizzling, fast game of brains and luck!</h1>

                            <figure className="">
                                <figcaption>Instructions:</figcaption>
                                <ol className="text-left">
                                    <li>Arrange players in a circle.</li>
                                    <li>Pick the challenge and press Start.</li>
                                    <li>Players answer their question and passes it to the next person..</li>
                                    <li>You get "burned" if you get your question wrong or the time runs out on your turn.</li>
                                    <li>Play multiple rounds to determine a winner.</li>
                                </ol>
                            </figure>

                            <h4 className="text-center">Do you have the skills and luck to not get <span className="flamingTextSecond">BURNED?</span></h4>
                        </div>

                        <div className="cell medium-5 large-4 columns Home-Columns">
                            <GameButtonList />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }

}

export default Home;