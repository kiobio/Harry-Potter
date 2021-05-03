import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import All from './All';
import './App.scss';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Navigation from './Navigation';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" children={<All/>}/>
        <Route exact path="/gryffindor/" children={<Gryffindor/>}/>
        <Route exact path="/ravenclaw/" children ={<Ravenclaw/>}/>
        <Route exact path="/hufflepuff/" children={<Hufflepuff/>}/>
        <Route exact path="/slytherin/" children={<Slytherin/>}/>
        
        
      </Switch>

    </Router>
  );
}

export default App;
