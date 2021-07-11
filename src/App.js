import './App.css';

import Profile from "./components/Profile";
import UserList from './components/UserList';

import UserState from './context/User/UserState';

import 'bootstrap/dist/css//bootstrap.min.css';

function App() {
  return (
    <div className="container">
    <UserState>
      <div className="row">
        <div className="col-md-6">
          <UserList />
        </div>
        <div className="col-md-6">
          <Profile />
        </div>
      </div>
    </UserState>
    </div>
  );
}

export default App;
