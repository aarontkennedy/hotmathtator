import React, { Component } from 'react';


class BackgroundColorChangeSection extends Component {

    state = {
        bgColor: { backgroundColor: "pink"}
    }

    whiteBg = { backgroundColor: "white"};

    interval = null;

    componentWillMount() {
        this.interval = setInterval(() =>{
            this.setState({bgColor: 
                { backgroundColor: this.getRandomColor()}
            });
        }, this.props.interval);
        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getRandomColor() {
        const colors = ["pink", "aqua", "aquamarine", "chartreuse", "chocolate", "cornflowerblue", "darkseagreen", "deepskyblue", "fuschia", "gold", "greenyellow", "lightcoral", "light salmon", "mediumpurple", "plum", "thistle", "yellow"];

        function getRandomWholeNumber(max = 10) {
            return Math.floor(Math.random() * (max));
        }

        return colors[getRandomWholeNumber(colors.length)];
    }

    render() {
        return (<section className="BackgroundColorController" style={this.props.gameOver ? this.whiteBg :this.state.bgColor}>
            {this.props.children}
        </section>);
    };
}

export default BackgroundColorChangeSection;