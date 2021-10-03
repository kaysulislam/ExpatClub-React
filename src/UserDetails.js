import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDetails({ users }) {
  const { id } = useParams();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        lineHeight: '10px',
      }}
    >
      {users
        .filter(user => parseInt(user.id) === parseInt(id))
        .map((user, index) => (
          // Display information of specific individuals that matches with the ID
          <div key={index}>
            <Card bg={'light'} style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title
                  style={{ paddingBottom: '10px', textAlign: 'center' }}
                >
                  {user.name}
                </Card.Title>
                <Card.Text>Username: @{user.username}</Card.Text>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>Phone: {user.phone}</Card.Text>
                <Card.Text>Company: {user.company.name}</Card.Text>
                <Card.Text>
                  Website:
                  <a href={`https://www.${user.website}`}>{user.website}</a>
                </Card.Text>
                <Card.Text>
                  <b>Address:</b>{' '}
                </Card.Text>
                <Card.Text>Street: {user.address.street}</Card.Text>
                <Card.Text>Suite: {user.address.suite}</Card.Text>
                <Card.Text>City: {user.address.city}</Card.Text>
                <Card.Text>Zipcode: {user.address.zipcode}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default UserDetails;
