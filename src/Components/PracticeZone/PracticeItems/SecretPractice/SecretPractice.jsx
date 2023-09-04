import React, { Fragment, useState } from "react";
import {Button} from "react-bootstrap";
import "./SecretPractice.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
import JSONDBComponent from "./JsonDBComponent";
import TodoFunc from "./TodoFunc";


function SecretPractice() {
    // constructor(props) {
    // }

    // addCounter = () => {
    //     this.setState({counter: this.state.counter + 1});
    // }
    return (
        <Fragment>
            {/* <h2>Staging Area</h2> */}
            <br />
            <div className="bzone-desc"><em>Practicing private components here</em></div>
            <div className="stdw ">
                {/* {JSONDBComponent()} */}
                <hr />
                {/* {TodoFunc()} */}
                <TodoFunc />
            </div>
        </Fragment>
    )
}

export default SecretPractice;