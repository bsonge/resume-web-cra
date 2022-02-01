import React, { Fragment } from "react";
import "./AutoComplete.scss";
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://jsonplaceholder.typicode.com/posts'; //https://example.com/api/items
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

/*
sample data:
{
    "userId": INT,
    "id": INT,
    "title": STR,
    "body": STR
  },
*/

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            api_returned_values: [],
        }
        this.getResults = this.getResults.bind(this);
    }

    updateText = lodash.debounce((e)=>this.getResults(e), DEBOUNCE_DELAY);

    getResults = (e)=>{
        console.log("debounce!", e.target.value);
        this.setState({isLoading: true});
        axios.get(ITEMS_API_URL).then(res=>{
            const data = res.data;
            this.setState({api_returned_values: this.tempFilterFunction(data, e.target.value)}); //, {params: {title: }}
            this.setState({isLoading: false});
        });
    } 
    
    // tapering results to 10 and filtering on name.
    tempFilterFunction = (data, text) => {
        return data.filter(item=>{
            return item.title.includes(text);
        }).splice(0, 10);
    }

    renderListItem = (item)=>{
        return (
            <a className="list-item">{item.title}</a>
        );
    }

    render() {
        return (
            <div className="wrapper">
                <h2>AutoComplete</h2>
                <div className="pzone-desc">
                    This item will query a public sample database and return a list of the names that contain the query string.  
                    It contains debounce functionality as to not overload the server with requests (set to 500ms).
                    It currently caps results to 10 per query by grabbing the whole load and filtering the results recieved.  
                    Once a sample database that can support queries is stood up, this will be adjusted to only grab matches.
                  </div>
                <div className="control">
                    <input type="text" className="input" onChange={this.updateText}  />
                </div>
                <div className={classnames("list", "is-hoverable", {"loading": this.state.isLoading})} >
                    {
                        this.state.isLoading ? <div>LOADING</div> :
                        this.state.api_returned_values.map( item=> {
                            return this.renderListItem(item);
                        }
                    )}
                </div>
                {/* <button onClick={e=>{e.preventDefault(); console.log(this.state)}}>state?</button> */}
            </div>
        );
    }    
}

