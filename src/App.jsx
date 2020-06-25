import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './screens/profile/Profile';
import EditProfile from './screens/profile/EditProfile';
import Login from './screens/Login';
import Register from './screens/Register';
import RegisterClubFormInfo from './screens/clubs/register-club/RegisterClubFormInfo';
import MyClub from './screens/clubs/my-club/MyClub';
import ClubList from './screens/clubs/club-list/ClubList';
import Games from './screens/Games';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile/edit">
          <EditProfile />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/clubs">
          <ClubList />
        </Route>
        <Route path="/clubs/register-club">
          <RegisterClubFormInfo />
        </Route>
        <Route exact path="/clubs/:id/profile">
          <MyClub />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
