import React, { Fragment } from "react";
import "./ReduxCounter.scss";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    selectCount,
} from './ReduxCounterSlice'
import { Button } from 'react-bootstrap';

const ReduxCounter = () => {
    const count = useSelector((state) => {
        console.log(state.rcounter.value);
        return state.rcounter.value
    })
    const dispatch = useDispatch()
    return (
        <Fragment>
            <h2>Redux Counter</h2>
            <div className="bzone-desc"><em>A test of redux store.  Redux store should only be used if the value will be used elsewhere.</em></div>
            <div className="stdw ">
                <div>{count}</div>
                <Button onClick={()=>dispatch(increment())}> + </Button>
                <span> </span>
                <Button onClick={()=>dispatch(decrement())}> - </Button>
            </div>
        </Fragment>
    )

}

export default ReduxCounter;