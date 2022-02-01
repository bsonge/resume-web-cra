import React, { Fragment } from "react";
import {Breadcrumb} from "react-bootstrap";
import "./AutoBreadcrumb.scss";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';



class AutoBreadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.winpath_arr = window.location.pathname.split("/");
        this.renderBreadcrumb.bind(this);
    }

    renderBreadcrumb(link, index) { 
        //NOTE: This needs to go through a custom browser history thing
        // let active = (this.winpath_arr[index] === this.winpath_arr[this.winpath_arr.length-1])?true:false; //active={active}
        return (
            <>
                {/* <Link to="/"><Breadcrumb.Item >{link}</Breadcrumb.Item></Link> */}
            </>
            
        );
    }

    render() {
        if(window.location.pathname !== "/") {
            return (
                <Fragment>
                {/* <div style={{color: "white"}}>Hi mom </div>
                    <Breadcrumb>
                        {this.winpath_arr.map((index, item) => {
                            this.renderBreadcrumb(item, index)
                        })}
                    </Breadcrumb> */}
                </Fragment>
            )
        } else return <></>;
    }
}

export default AutoBreadcrumb;