import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails({ users }) {
  const { id } = useParams();

  return (
    <div>
      {users
        .filter(user => parseInt(user.id) === parseInt(id))
        .map((user, index) => (
          <div key={index}>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p></p>
            <p>phone: {user.phone}</p>
            <p>company: {user.company.name}</p>
            <p>website: {user.website}</p>
            <p>Address:</p>
            <p>street: {user.address.street}</p>
            <p>suite:{user.address.suite}</p>
            <p>city:{user.address.city}</p>
            <p>zipcode:{user.address.zipcode}</p>
          </div>
        ))}
    </div>
  );
}

export default UserDetails;
