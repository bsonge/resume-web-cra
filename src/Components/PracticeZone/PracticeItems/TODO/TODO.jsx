import React, { Fragment } from "react";
import "./TODO.scss";
import { Link } from 'react-router-dom';

class TODO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_text: "",
            buttonList: [],
        }
        this.updateText = this.updateText.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.strikeItem = this.strikeItem.bind(this);
    };

    updateText = (evt)=>{
        evt.preventDefault();
        this.setState({input_text: evt.target.value});
        console.log(this.state.input_text);
    };

    addListItem = (evt)=>{
        evt.preventDefault();
        if(this.state.input_text !== "") {
            this.setState({ buttonList: [...this.state.buttonList, {text: this.state.input_text, done: false}]});
            this.setState({input_text: ""});
            console.log(this.state);
        }
    };

    strikeItem = index => {
        let newList = this.state.buttonList;
        newList[index].done = !newList[index].done;
        this.setState({buttonList: newList});
    };

    renderListItem = (item, index)=>{
        return (
            <li key={index} className={item.done?"done":""} onClick={()=>this.strikeItem(index)}>
                {item.text}
            </li>
        )
    };

    render() {
        // let buttonList= [];
        return (
            <Fragment>
                <div className="stdw ">
                    <h2>
                        Todo List
                    </h2>
                    <div className="pzone-desc"><em>This list allows the user to add tasks to a bulleted list.  The user can strike or unstrike each item.  The list has a line that updates the user on how many tasks are completed out of the total number of tasks.</em></div>
                    <form onSubmit={e=>this.addListItem(e)}>
                        <input type="text" onChange={this.updateText} value={this.state.input_text} />
                        <button type="submit">Add</button>
                    </form>
                    {/* <button onClick={e=>{e.preventDefault(); console.log(this.state)}}>state?</button> */}
                    <div>{this.state.buttonList.filter(item=>!item.done).length} remaining out of {this.state.buttonList.length} tasks</div>
                    <ul className="todo-list">
                        {
                            this.state.buttonList.map((item, index) => {
                                return this.renderListItem(item, index);
                            })
                        }
                    </ul>
                    
                </div>
            </Fragment>

            // {/* </div> */}

        )
    }
}

export default TODO;