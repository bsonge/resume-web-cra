import React, { Fragment } from "react";
import "./Home.scss";
// import {ReactComponent as WAVE_IMG} from "../../shared/images/Homepage_Divider.svg";
import WAVE_IMG from "../../shared/images/Homepage_Divider.png";
import { Link } from 'react-router-dom';

/*  expected props:
test = [{id:int, color: string}]
*/
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.returnColor = this.returnColor.bind(this);
    }

    returnColor(id) {
        let item = this.props.test.filter(t => t.id === id)[0];
        return item ? item.color : "none";
    }

    render() {
        return (
            // <div className="homepage-container">
            <Fragment>
                <div className="UPPER fllw">
                    <div className="spacer stdw" />
                    <div className="title-card">
                        <div className="title-main"><strong>WhimsyDeep</strong></div>
                        <div className="tagline">Welcome to my little corner of the internet.</div>
                    </div>
                    {/* <p> Cool Test Color: <strong style={{"color": this.returnColor(3)}}>{ this.returnColor(3) }</strong> </p> */}
                    <div className="spacer stdw" />
                    <div className="spacer stdw" />

                </div>

                <div className="wave-divider fllw">
                    <img src={WAVE_IMG} className="wave-divider-img" alt="waves"></img>
                    {/* <WAVE_IMG className="wave-divider-img" /> */}
                </div>
                <div className="LOWER fllw">
                    <div className="buttons stdw">
                        <Link to="/resume"> Resume (COMING SOON) </Link>
                    </div>
                </div>

            </Fragment>

            // {/* </div> */}

        )
    }
}

export default Home;