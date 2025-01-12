import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

const App =()=> {
    return (
      <>
        <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" pagesize={12} country="in" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" pagesize={12} country="in" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pagesize={12} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/general">
              <News key="general" pagesize={12} country="in" category="general"/>
            </Route>
            <Route exact path="/health">
              <News key="health" pagesize={12} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
              <News key="science" pagesize={12} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pagesize={12} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" pagesize={12} country="in" category="technology" />
            </Route>
          </Switch>
      </Router>
      </div>
      </>
    );
}
export default App
