import Home from './views/Home';
import Game from './views/Game';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route path="/game" component={ Game } />
      </div>
    </Router>
  );
}

export default App;
