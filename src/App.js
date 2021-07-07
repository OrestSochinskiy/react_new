import logo from './logo.svg';
import './App.css';
import {useSelector, Provider, useDispatch} from "react-redux";
import {useEffect} from "react";

const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const posts = useSelector(({posts}) => posts)
    const users = useSelector(({users}) => users)
    const dispatch = useDispatch()


    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json();

        dispatch({
            type: "ADD_POSTS",
            payload: json
        })
    }
    useEffect(() => {
        fetchPosts();
    }, [])



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json().then(data => {
            dispatch({
                type: 'ADD_USERS',
                payload: data
            })
        }))
    }, [])

    return (
        <header className="App-header">
            <h1>{counter}</h1>

            <button onClick={() => {
                dispatch({type: "INC"})
            }}>INC
            </button>


            <button onClick={() => {
                dispatch({type: "DEC"})
            }}>DEC
            </button>

            <button onClick={() => {
                dispatch({type: "RES"})
            }}>RESET
            </button>


            {/*<button onClick={() => {*/}
            {/*        dispatch({type:"INP"})*/}
            {/*}}>                                                 ???*/}
            {/*    <input className={'input'}></input>*/}
            {/*</button>*/}

            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>

            <ul>
                {posts && posts.map(post => (<li>{post.title}</li>))}
            </ul>

            <ul>
                {users && users.map(user => (<li>{user.name}</li>))}
            </ul>

            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>

        </header>)
}

function App() {
    return (
        <div className="App">

            <NestedChild/>

        </div>
    );
}

export default App;
