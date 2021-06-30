import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <Router>
            <div>

                <Link to={""}>HOME</Link>
                <br/>
                <Link to={"/users"}>to user page</Link>
                <br/>
                <Link to={"/posts"}>to posts page</Link>
                <br/>

                <Switch>

                    <Route path={"/users"} render={() => <Users/>}/>
                    <Route path={"/posts"} render={() => <Posts/>}/>
                    <Route  path={"/"} render={() => <div>HOME </div>}/>
                </Switch>
            </div>
        </Router>
    );
}
