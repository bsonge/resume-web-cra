/** Todo: Add router setup here */
import React from "react";
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
                        <Route path="/resume">
                            <div>Nothing here yet!</div>
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}
    
export default withRouter(connect(mapStateToProps)(Main));