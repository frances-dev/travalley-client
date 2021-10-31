import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { selectedService, remove, setSelectedService, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  const history = useHistory();
  const totalPrice = selectedService.reduce(
    (total, service) => total + service.price,
    0
  );

  return (
    <div className="my-4">
      <Container>
        {selectedService.length ? (
          <Row className="d-flex flex-row-reverse">
            <Col className="text-center" md={4}>
              <h4>Total {selectedService.length} Service selected</h4>
              <h6>Total Price: {totalPrice.toFixed(2)} $</h6>
              <button
                onClick={() => {
                  fetch(
                    `https://safe-peak-05375.herokuapp.com/purchase/${uid}`,
                    {
                      method: "delete",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        alert("This for purchasing");
                        setSelectedService([]);
                        history.push("/home");
                      }
                    });
                }}
                className="btn btn-dark"
              >
                Check Out
              </button>
            </Col>

            <Col md={8}>
              {selectedService.map((service) => {
                const { img, _id, title, desc, ratingCount, price } =
                  service;

                return (
                  <Row className="my-2 cart-bg cart-row" key={_id}>
                    <Col sm={5}>
                      <img className="cart-img" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h5 className="my-2">{title}</h5>
                      <p className="mb-0">{desc.slice(0, 200)}</p>
                      <h5 className="my-3">Price: ${price}</h5>
                      <Row>
                        <Col sm={4}>
                          <Col>Total order {ratingCount}</Col>
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/services/${_id}`}
                              className="btn btn-warning w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(_id)}
                              className="btn btn-danger  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No Service Selected yet!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
