import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import WasteRoom from "./pages/wasteroom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/wasteroom">
            <WasteRoom/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
