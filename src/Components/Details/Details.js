import {useEffect, useState} from "react";
import Detail from "./Detail";

export default function Details({id}) {
    let [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/588228?api_key=dac218d64b95c6065f64b83fcab88dbd&language=en-US')
            .then(value => value.json())
            .then(value => () => {
                console.log(value);
                setDetail([...value])
            })
    }, [])
    return(
        <div>
            {
                detail.map(value => <Detail key={value.id} item={value}/>)
            }
        </div>
    );
}