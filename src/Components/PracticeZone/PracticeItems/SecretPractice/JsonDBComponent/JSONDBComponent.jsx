import React, { Fragment, useState } from "react";
import {Button} from "react-bootstrap";
import "./JSONDBComponent.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';


/** ==== JSON DB COMPONENT START ==== */

const postaddress = "http://localhost:4000/posts/"
const copmmentaddress = "http://localhost:4000/comments/"

/**
 * template post: {"id":int, "title":string, "author":string}
 * template comment: {"id":int, "uname":string, "body":string, "post_id":int}
 */

function JSONDBComponent() { 
    /** State Vars */
    const [query, setQuery] = useState({
        "query_type": "title",
        "payload": "",
    }); 
    const [returned_data, setReturnedData] = useState({}); 
    const [post_data, setPostData] = useState(); 



    /** State Helpers */
    const handleChange = (e) => {
        const {name, value} = e.target;
        setQuery(prevState=> ({
            ...prevState,
            [name]: value,
        }));
    }

    /** Helpers */
    const get = (e) => {
        e.preventDefault();
        console.log("get");
        axios.get(postaddress + "1")
        .then(res => {
            setReturnedData(res.data);
        });
    }
    // const post = (e) => {
    //     e.preventDefault();
    //     // setData(payload);
    //     //"id":990,"uname":"omiddasrh","body":"Self-enabling tertiary strategy","post_id":82
    //     let payload = e.target;
    //     console.log(payload)
    // }

    //onChange={e => setQuery(e.target.value)}
    //onClick={e => get(e, query_data)}
    return (
        <div>
            Search for a movie! <br/>
            <form onSubmit={e=>get(e)}>
                <select name="query_type" onChange={e=>handleChange(e)}>
                    <option selected value="title">title</option>
                    <option value="author">author</option>
                </select>
                <input name="payload" type="text" onChange={e=>handleChange(e)}></input>
                <Button type="submit" value="submit" >Query!</Button><br/>

            </form>
            <br/>
            
            <br/>
            {/* <input onChange={e => setPostData(e.target.value)}></input> <Button onClick={e => post(e, post_data)}>Post Comment!</Button><br/> */}
            
            <br/><br/><br/><br/>
            <div className="get-results">Query data value: {'{ query_type: "' + query.query_type + '", payload: "' + query.payload + '"}' }</div>
            <div className="get-results">Data value: "{post_data}"</div>
            
        </div>
    )
};


/** ==== JSON DB COMPONENT END ==== */


export default JSONDBComponent;