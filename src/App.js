import Home from './views/Home';
import Game from './views/Game';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route path="/game" component={ Game } />
      </div>
    </HashRouter>
  );
}

export default App;
