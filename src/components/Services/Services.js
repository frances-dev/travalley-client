import React from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service.js";
import '../../App.css';

const Services = () => {
  const [services] = useServices();
  return (
    <div>
      <div className='my-margin2'>
        <div className="main-container">
          <h2 className="my-4 p-heading fw-bold">Explore our All Services</h2>
          <div className='my-grids'>
            {
              services?.map((service) => (
                <Service service={service} key={service.key}></Service>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
