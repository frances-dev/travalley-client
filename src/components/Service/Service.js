import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import '../../App.css'

const Service = ({ service }) => {
  const history = useHistory();
  const { _id, img, title, desc, price, ratingCount } = service;

  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;
  return (
    <div className='my-grids-container'>
      <div class="my-card">
        <div className='card-img-container'>
          <img src={img} class="card-img-top" alt="..." />
          <p className="card-category">${price}</p>
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-body">
          <h6 className="card-text2">{desc.slice(0, 90)}.</h6>
        </div>
        <p className="text-center my-3 ordered-text">Total ordered {ratingCount} times</p>

        {/* ADD to cart & Details Button */}
        <div className="d-flex">
          <NavLink
            to={`/services/${_id}`}
            className="btn details-btn w-100 me-1"
          >
            View Details
          </NavLink>
          <button
            onClick={() => {
              if (uid) {
                addToCart(service);
              } else {
                history.push("/login");
              }
            }}
            className="btn ordered-btn w-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
