import React from 'react';
import Login from '././components/Login';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Catalog from './components/DrawerItems/catalog';
import Dashboard from './components/DrawerItems/dashboard';
import ProtectedRoute from './protectedRoute.js';
import Settings from './components/DrawerItems/settings';
import AdminDashboard from './Admin/admin-dashboard';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/dashboard' component={AdminDashboard} />
        <ProtectedRoute exact path='/settings' component={AdminDashboard} />
        <ProtectedRoute exact path='/catalog' component={AdminDashboard} />
        

      </Switch>
    </div>
  );
}

export default App;