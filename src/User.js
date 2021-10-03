import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function User({ users }) {
  return (
    <div>
      {users.map(
        (
          user //Looping through all the users and displaying the key-info
        ) => (
          <div
            key={user.id}
            style={{
              display: 'inline-flex',
              padding: '20px',
              textAlign: 'center',
              lineHeight: '5px',
              fontFamily: 'Helvetica',
              fontSize: '12px',
            }}
          >
            <Card
              //* This section create a box for each user */
              bg={'light'}
              style={{
                width: '250px',
                height: '300px',
              }}
            >
              <Card.Body>
                {/* This section create a circular-badge in the box with first letter from the users */}
                <section id="circularBadge">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'lightgray',
                      margin: 'auto',
                      fontSize: '40px',
                      fontWeight: 'lighter',
                      lineHeight: '40px',
                      fontFamily: 'Helvetica',
                      textAlign: 'center',
                      boxShadow: '1px 1px 1px black',
                    }}
                  >
                    <p>{user.name.slice(0, 1)}</p>
                  </div>
                </section>
                {/* This section deals with the user credentials */}
                <section id="user">
                  <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>@{user.username}</Card.Text>
                    <Card.Text>
                      {' '}
                      <a href={`https://www.${user.website}`}>
                        <u>{user.website}</u>{' '}
                      </a>
                    </Card.Text>
                    {/* This section creats a button using bootstrap */}
                    <Link to={`/users/${user.id}`}>
                      <Button variant="primary">More Details</Button>
                    </Link>
                  </div>
                </section>
              </Card.Body>
            </Card>
          </div>
        )
      )}
    </div>
  );
}

export default User;
