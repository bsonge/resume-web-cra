/** Todo: Add router setup here */
import React from "react";
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from "../Home/Home";

const mapStateToProps = state => {
    return {
        test: state.test,
    }
}

class Main extends React.Component {
    render() {
        return (
            <Home test={this.props.test} />
        );
    }
}
    
export default connect(mapStateToProps)(Main); //withRouter()