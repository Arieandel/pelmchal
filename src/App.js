import './App.css';
import AppState from './context/AppState'
import React from 'react'
import AlbumList from './components/pages/AlbumList'
import PhotoList from './components/pages/PhotoList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <AppState>
      <Router>
        <Switch>
          <Route exact path='/photos/:id' component={PhotoList}/>
          <AlbumList />
        </Switch>
      </Router>
    </AppState>
  );
}

export default App;
