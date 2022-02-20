import React, { Fragment } from "react";
import {Card} from "react-bootstrap";
import "./CardList.scss";
import { Link } from 'react-router-dom';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cards,
        }
        this.renderCard.bind(this);
    }

    renderCard(card) {
        return (
            <Link className="card clist-item anim-zoom-brightness" to={card.link}>
                <div className="anim-zoom-brightness"><Card.Img src={card.image}/></div> 
                <h5>{card.title}</h5>
            </Link>
        )
    }

    render() {
        return (
            <Fragment>
                <div className="text-area stdw">
                    <ul className="clist">
                    {
                        this.state.cards.map((card, index)=> {
                            return (
                                <li key={index}>
                                    {this.renderCard(card)}
                                </li> 
                            )
                        })
                    }                        
                    </ul>
                </div>
            </Fragment>
                           
            // {/* </div> */}
            // for(let i = 0; i < this.state.cards.length; ++i) {
                                        
            // }

        )
    }
}

export default CardList;