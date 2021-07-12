import {useEffect, useState} from "react";

export default function Film({item}) {
    const id = item.id;
    const DetailsBtn = () => {
    let [detail,setDetail] = useState();
useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=dac218d64b95c6065f64b83fcab88dbd&language=en-US')
            .then(value => value.json())
            .then(value => () =>{
                setDetail([...value])
            })
},[id])
    }
    return(
        <div>
            {console.log(item)}
            <div><h1>{item.title}</h1></div>
            <div>{item.overview}</div>
            <div>
                <button onClick={DetailsBtn}>DETAILS</button>

            </div>
            <hr/>
        </div>
    );
}