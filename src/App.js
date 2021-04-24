import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="app">
     <Router>
       <Header />
       <Switch>
         <Route exact path='/'>
           <Login />
         </Route>
         <Route exact path='/home'>
           <Home />
         </Route>
         <Route exact path='/details/:id'>
           <Details />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
