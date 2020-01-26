import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Heaader from './components/header/Header';
import Vacancies from './components/vacancies/Vacancies'

import Train from './views/Train/Train';

import AuthProvider from './context/AuthContext';
import TrainProvider from './context/TrainContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <TrainProvider>
          <Heaader />
          <Switch>
            <Route path="/Vacancies">
              <Vacancies />
            </Route>
            <Route path="/trains">
              <Train />
            </Route>
          </Switch>
        </TrainProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
