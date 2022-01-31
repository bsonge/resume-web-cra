/** Todo: Add router setup here */
import React from "react";
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router";
import Home from "Components/Home/Home";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import PracticeZone from "Components/PracticeZone/PracticeZone";
import { Link } from 'react-router-dom';
import "./Main.scss";

const mapStateToProps = state => {
    return {
        test: state.test,
    }
}


class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="page-wrap">
                    <Switch >
                        <Route exact path="/">
                            <Home test={this.props.test} />
                        </Route>
                        {/* Resume */}
                        <Route path="/resume">
                            <div>Nothing here yet!</div>
                        </Route>
                        {/* Practice Zone */}
                        <Route exact path="/practice-zone">
                            <PracticeZone />
                        </Route>
                        <Route path="/p-counter">
                            <div>Counter zone!</div>
                        </Route>p-input-auto-complete
                        <Route path="/p-todo">
                            <div>Todo zone!</div>
                        </Route>p-input-auto-complete
                        <Route path="/p-input-auto-complete">
                            <div>Auto Complete zone!</div>
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}
    
export default withRouter(connect(mapStateToProps)(Main));