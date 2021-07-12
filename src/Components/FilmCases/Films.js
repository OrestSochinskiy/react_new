import {useEffect, useState} from "react";
import axios from "axios";
import Film from "./Film";

export default function Films(props) {

    let [films, setFilms] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=dac218d64b95c6065f64b83fcab88dbd&language=en-US&page=1")
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setFilms([...value.results])
            })
    }, [])


    return (
        <div>
            {
                films.map(value => <Film key={value.id} item={value}/>)
            }

        </div>
    );
}