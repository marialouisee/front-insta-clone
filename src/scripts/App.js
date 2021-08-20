import '../scss/main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import Info from './components/Info';
import Hightlighs from './components/Hightlights'
import Navigation from './components/Navigation';
import Posts from './components/switch/Posts';
import Reels from './components/switch/Reels';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='page-wrapper'>
          <Info />
          <Hightlighs />
          <Navigation />
          <Switch>
            <Route path='/posts' component={Posts}/>
            <Route path='/reels' component={Reels}/>
            {/* IGTV */}
            {/* Tagged */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
