import Users from "./comps/Users/Users";
import {BrowserRouter as Router , Link ,Switch , Route} from "react-router-dom";

export default function App() {
  return (
      <Router>

    <div>
        <Link to={'/users'}>users page</Link>
        <Switch>
            <Route path={"/users"} component={Users}></Route>
        </Switch>
    </div>
      </Router>
  );
}
