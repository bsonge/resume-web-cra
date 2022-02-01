import React, { Fragment } from "react";
import "./Counter.scss";
import { Link } from 'react-router-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 42,
        }
        this.addCounter = this.addCounter.bind(this)
    }

    addCounter = () => {
        this.setState({counter: this.state.counter + 1});
    }
    
    render() {
        return (
            <Fragment>
                <h2>Counter</h2>
                <div className="bzone-desc"><em>A counter that starts at 42 and increments by 1 every time the button is clicked.</em></div>
                <div className="stdw ">
                    <h2 className="counter" >{this.state.counter}</h2>
                    <button className="counter-button" onClick={this.addCounter}>Click</button>
                </div>
            </Fragment>
        )
    }
}

export default Counter;