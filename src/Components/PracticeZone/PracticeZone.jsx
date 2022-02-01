import React, { Fragment } from "react";
import "./PracticeZone.scss";
// import { Link } from 'react-router-dom';
import PLACEHOLDER from "shared/images/placeholder/268x180.svg";
import CardList from "Components/Widgets/CardList/CardList";

class PracticeZone extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        var cards = [
            {
                title: "Counter",
                image: PLACEHOLDER,
                link: "/practice-zone/p-counter",
            }, {
                title: "TODO",
                image: PLACEHOLDER,
                link: "/practice-zone/p-todo",
            }, {
                title: "Auto Complete",
                image: PLACEHOLDER,
                link: "/practice-zone/p-input-auto-complete",
            },
        ];
        return (
            <Fragment>
                <h2>The Practice Zone</h2>
                <CardList cards={cards}/>
            </Fragment>

            // {/* </div> */}

        )
    }
}

export default PracticeZone;