import React, { Fragment } from "react";
import "./Home.scss";
// import WAVE_IMG from "../../shared/images/Home_Bg_Waves.png";

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
            <div className="homepage-container">
            <div className="main-content">
                    <p><strong>MAIN!!</strong></p>
                    <div className="bgimg"></div>
                    {/* <img src={WAVE_IMG} alt="waves"></img> */}
                    <p> Cool Test Color: { this.returnColor(3) } </p>
            </div>
            <div className="buttons">
                <div>Here there be dragons!</div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            </div>

        )
    }
}

export default Home;