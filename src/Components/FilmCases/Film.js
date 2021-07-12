import {useEffect, useState} from "react";
import Details from "../Details/Details";

export default function Film({item}) {
    return (
        <div>
            {console.log(item)}
            <div><h1>{item.title}</h1></div>
            <div>{item.overview}</div>
            <div>
                <button onClick={Details}>DETAILS</button>
            </div>
            <hr/>
        </div>
    );
}