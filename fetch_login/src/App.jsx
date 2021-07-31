
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Page_Login from './components/pages/page_login/Page-Login';
import Page_Register from './components/pages/page_register/Page_Register';
import Home from './components/home/Home';
import Navbar from './components/pages/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path='/home'>
            <Navbar/>
            <Home/>
          </Route>

          <Route path='/register'>
            <Page_Register/>
          </Route>

          <Route path='/login'>
            <Page_Login/>
          </Route>

          <Route path='/'>
            
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
