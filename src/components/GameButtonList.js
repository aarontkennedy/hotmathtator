import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './GameButtonList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GameButtonList extends Component {
    render() {
        return (
            <ul className="text-center GameButtonList">
                <li>
                    <Link to="/game/additionFacts" className="button" >
                        <FontAwesomeIcon icon="plus" /> Addition</Link>
                </li>
                <li>
                    <Link to="/game/subtractionFacts" className="button" >
                        <FontAwesomeIcon icon="minus" /> Subtraction</Link>
                </li>
                <li>
                    <Link to="/game/multiplicationFacts" className="button" >
                        <FontAwesomeIcon icon="times" /> Multiplication</Link>
                </li>
                <li>
                    <Link to="/game/divisionFacts" className="button" >
                        <FontAwesomeIcon icon="divide" /> Division</Link>
                </li>
                <li>
                    <Link to="/game/randomFacts" className="button" >
                        <FontAwesomeIcon icon="dice" /> Random</Link>
                </li>
                <li>
                    <Link to="/game/addIntegers" className="button" >
                        <FontAwesomeIcon icon="plus" /> Integer</Link>
                </li>
                <li>
                    <Link to="/game/subtractIntegers" className="button" >
                        <FontAwesomeIcon icon="minus" /> Integer</Link>
                </li>
                <li>
                    <Link to="/game/multiplyIntegers" className="button" >
                        <FontAwesomeIcon icon="times" /> Integer</Link>
                </li>
                <li>
                    <Link to="/game/divideIntegers" className="button" >
                        <FontAwesomeIcon icon="divide" /> Integer</Link>
                </li>
                <li>
                    <Link to="/game/randomIntegers" className="button" >
                        <FontAwesomeIcon icon="dice" /> Integers</Link>
                </li>
            </ul>
        );
    }

}

export default GameButtonList;