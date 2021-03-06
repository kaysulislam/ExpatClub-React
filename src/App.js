import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import UserDetails from './UserDetails';

function App() {
  // Fetch the data from the API using hooks
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <Home users={users} />
      </Route>
      <Route path="/users/:id">
        <UserDetails users={users} />
      </Route>
    </Router>
  );
}

export default App;
