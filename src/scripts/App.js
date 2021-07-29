import '../scss/main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'


function App() {
  return (
    <Router>
      <div className="App">
      
      <Header/>
      {/* info */}
      {/* Hightlighs */}

      <Switch>
        {/* Posts */}
        {/* Reels */}
        {/* IGTV */}
        {/* Tagged */}
      </Switch>
      </div>

    </Router>
    
  );
}

export default App;
