import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link , Route, Switch} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/posts/Posts";
import PostsComments from "./components/PostsComments/PostsComments";

function App() {
  return (
      <Router>
      <div className={'App'}>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/posts'}>Posts</Link>
      </div>




      <div>
        <Switch>
          <Route exact path={'/'}/>
          <Route path={'/users'} component={Users}/>
          <Route path={'/posts'} component={PostsComments}/>
        </Switch>

      </div>
      </Router>
  );
}

export default App;
