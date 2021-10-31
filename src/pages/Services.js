import useAuth from "./../hooks/useAuth.js";
import Service from "../components/Service/Service.js";

const Services = () => {
  const { services, setCurrentPage } = useAuth();

  function pageHandler(number) {
    setCurrentPage(number);
  }

  return (
    <div>
      <div className='my-margin2'>
        <h2 className="my-4 p-heading fw-bold">Explore our All Services</h2>
        <div className="main-container">
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
