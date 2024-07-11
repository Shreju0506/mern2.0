import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import StoreList from './components/StoreList';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <AuthState>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/admin-dashboard' component={AdminDashboard} />
            <Route exact path='/user-dashboard' component={UserDashboard} />
            <Route exact path='/stores' component={StoreList} />
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
};

export default App;
