import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth.js";
import "./header.css";

const Header = () => {
  const { AllContexts } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, photoURL, email } = user;
  return (
    <div className="">
      <Navbar className="nav-bg" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="nav-text text-bold" to="/home">
            <span className="title"> Travalley</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="nav-text my-hover">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="nav-text my-hover">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-text my-hover">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="nav-text my-hover">
                Contact
              </Nav.Link>
              <Nav.Link as={HashLink} to="/admin" className="nav-text my-hover">
                Manage Orders
              </Nav.Link>
            </Nav>
            <Nav className="mx-auto align-items-center">
              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="nav-text my-hover">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="nav-text my-hover" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav className="d-flex align-items-center link-danger">
                    <Nav.Link
                      as={HashLink}
                      to="/dashboard"
                      className="nav-text my-hover"
                    >
                      Dashboard
                    </Nav.Link>

                    <NavDropdown
                      title={
                        <img
                          style={{
                            width: "45px",
                            borderRadius: "50%",
                          }}
                          src={photoURL}
                          alt=""
                        />
                      }
                    >
                      <div className="text-center m-3 login-popup">
                        <h5>{displayName}</h5>
                        <p className="m-0 mb-2">{email}</p>
                        <button onClick={logOut} className="btn btn-danger">
                          Sign Out
                        </button>
                      </div>
                    </NavDropdown>
                  </Nav>

                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
