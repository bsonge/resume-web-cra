/** Todo: Add router setup here */
import React from "react";
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router";
import Home from "../Home/Home";

const mapStateToProps = state => {
    return {
        test: state.test,
    }
}


class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <Switch>
                    <Route exact path="/">
                        <Home test={this.props.test} />
                    </Route>
                    <Route path="/resume">
                        <div>Nothin here!</div>
                    </Route>
                </Switch>
                <h1>Footer</h1>
            </div>

        );
    }
}
    
export default withRouter(connect(mapStateToProps)(Main));