import React, { Fragment } from "react";
import "./Counter.scss";
import { Link } from 'react-router-dom';



const url = process.env.API_ADDRESS;

class Counter extends React.Component {
    // constructor(props) {
    // }

    // addCounter = () => {
    //     this.setState({counter: this.state.counter + 1});
    // }
    render() {
        return (
            <Fragment>
                <h2>DB Query</h2>
                <div className="bzone-desc"><em>Queries Database</em></div>
                <div className="stdw ">
                    
                </div>
            </Fragment>
        )
    }
}

export default Counter;