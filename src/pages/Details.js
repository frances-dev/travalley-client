import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth.js";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const Details = () => {
  const history = useHistory();
  const [service, setService] = useState({});
  const { id } = useParams();
  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  useEffect(() => {
    fetch(`https://safe-peak-05375.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setService(data);
        } else {
          alert("something went wrong!");
        }
      });
  }, [id]);

  return (
    <div className="my-4">
      {service?.title ? (
        <Container className="d-flex flex-column w-50">
          <Row className="mx-auto d-flex flex-column">
            <Col md={6}>
              <img className="details-img mt-5" src={service.img} alt="" />
            </Col>
            <Col>
              <h2 className="my-4">{service.title}</h2>
              <h5>{service.desc}</h5>
              <Row>
                <Col>
                  <h2 className="text-start mt-3">Price: ${service.price}</h2>
                  <div className="my-2">

                    <span> {service.rating}</span>
                    <p className="mb-3">Total Ordered: {service.ratingCount}</p>
                    <button
                      onClick={() => {
                        if (uid) {
                          addToCart(service);
                        } else {
                          history.push("/login");
                        }
                      }}
                      className="btn btn-warning  w-25"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
