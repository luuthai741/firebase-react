import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './components/Home/index';
import Login from './components/Login';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      {/* <Router>
      <Switch>
        <Route exact component={Home} path="/home" />
        <Route component={Login} path="/login" />
      </Switch>
    </Router> */}

      <Login></Login>
    </div>
  );
}

export default App;
