import React, { Fragment } from "react";
import "./PracticeZone.scss";
import { Link } from 'react-router-dom';

class PracticeZone extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <h2>The Practice Zone</h2>
                <div className="text-area stdw">
                    <ul>
                        <li><Link to="/p-counter"> Counter </Link></li>
                        <li><Link to="/p-todo"> Todo </Link></li>
                        <li><Link to="/p-input-auto-complete"> Counter </Link></li>
                    </ul>
                </div>
            </Fragment>

            // {/* </div> */}

        )
    }
}

export default PracticeZone;