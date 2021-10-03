import React from 'react';
import { Link } from 'react-router-dom';

function User({ users }) {
  return (
    <div>
      {users.map(user => (
        <ul key={user.id}>
          <div className="user-credentials">
            <h5>{user.name}</h5>
            <p>@{user.username}</p>
            <p>{user.website}</p>
            <Link to={`/users/${user.id}`}>More Details</Link>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default User;
