import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";

const Profile = () => {
  const { AllContexts } = useAuth();
  const { user } = AllContexts;
  const { displayName, photoURL, email } = user;
  return (
    <div>
      <h1 className="text-center text-secondary mb-4">Your Profile</h1>
      <Container className="my-2">
        <Row>
          <Col md={4}>
            <div className="align-items-center d-flex flex-column">
              <img
                width="220px"
                className="rounded-circle"
                src={photoURL}
                alt=""
              />
              <button className="btn mt-3 btn-success">Edit Profile</button>
            </div>
          </Col>
          <Col md={8}>
            <h2><small>Full name</small></h2>
            <h3>{displayName}</h3>
            <h2><small>Email Address</small></h2>
            <h3>{email}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
