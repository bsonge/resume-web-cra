import React from "react";

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
            <div>
                    <h1>Header goes here</h1>
                    <p><strong>MAIN!! Todo: add router</strong></p>
                    <p> Cool Test Color: { this.returnColor(3) } </p>
                    <h1>Footer goes here</h1>
            </div>
        )
    }
}

export default Home;