import React from "react";
import { Carousel } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import Service from "../components/Service/Service.js";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { services } = useAuth();
  return (
    <div>
      {/* Banner Section */}
      <Carousel className="my-height">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fit"
            src="https://images.unsplash.com/photo-1566133548098-a8820697e960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2916&q=80"
            alt="First slide" height={450}
          />
          <Carousel.Caption>
            <h3>Adventure to Norway</h3>
            <p>Get the best adventure of your life and gain experience from the beauty of nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fit"
            src="https://images.unsplash.com/photo-1616394585067-d3e824140aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3087&q=80"
            alt="Second slide" height={450}
          />

          <Carousel.Caption>
            <h3>Adventure to the Sea Emperor</h3>
            <p>Enjoy the best Sea adventure of your life and taste the beauty of nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fit "
            src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2967&q=80"
            alt="Third slide" height={450}
          />

          <Carousel.Caption>
            <h3>Adventure to Italy</h3>
            <p>Feel the best boat adventure of your life and get mixed with nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Featured Services Section */}
      <div
        id="feature"
        className="py-5"
      >
        <div className="text-center text-white">
          <h1 className="mt-5 text-danger">Our Featured Services</h1>
          <p className="mb-0 text-secondary">
            Here you can find our all latest services. Choose some of them and
            try to grow up your experience.
          </p>
        </div>

        <div className='my-margin2'>
          <div className="main-container">
            <div className='my-grids'>
              {
                services.slice(3, 9)?.map((service) => (
                  <Service key={service.key} service={service} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <section className="medical-services text-center">
          <h2 className="main-heading1 lite mt-5 text-danger">Our Top</h2>
          <h2 className="main-heading2 text-primary">Tourist Countries</h2>

          {/* Tourist Places Lists */}
          <ul className="list-unstyled row text-center mb-5">
            <li className="col-md-2 col-sm-4 col-xs-12">
              <div className="icon">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/90/45/f3/a-noruega-fica-no-norte.jpg?w=900&h=600&s=1" />
              </div>
              <h5>Norway</h5>
              <p>Norway is one of the most famous city for tourists across the world.</p>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-12">
              <div className="icon">
                <img src="https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg" alt="Dental Care" />
              </div>
              <h5>Rome</h5>
              <p>Rome is the ancient city of historical structures. Its a must for tourists.</p>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-12">
              <div className="icon">
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60be53dc326b9db78eedf9b5%2FFamous-touristic-town-of-Liguria-with-beaches-and-colorful-houses%2F960x0.jpg%3FcropX1%3D64%26cropX2%3D948%26cropY1%3D33%26cropY2%3D574" alt="24x7 Ambulance" />
              </div>
              <h5>Italy</h5>
              <p>The natural beauty of Italy is beyond description. You can learn by exploring.</p>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-12">
              <div className="icon">
                <img src="https://cdn.travelpulse.com/images/54aaedf4-a957-df11-b491-006073e71405/ee952e9e-f09c-49c2-bc5d-4303c880173a/630x355.jpg" alt="Qualified Doctors" />
              </div>
              <h5>Hawaii</h5>
              <p>Hawaii is the top ranked tourist places which has its unique beauty.</p>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-12">
              <div className="icon">
                <img src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200924183413-dubai-9-1.jpg" alt="Medical Pharmacy" />
              </div>
              <h5>Dubai</h5>
              <p>Dubai, the arabian city of gold. Its favorite to many tourists for luxurious and traditional touch. </p>
            </li>
            <li className="col-md-2 col-sm-4 col-xs-12">
              <div className="icon">
                <img src="https://images.adsttc.com/media/images/5d6c/ac54/284d/d182/3800/01ac/slideshow/shutterstock_129551465.jpg?1567403074" />
              </div>
              <h5>Jerusalem</h5>
              <p>This place is called the kingdom of heaven where every religion has their history. </p>
            </li>
          </ul>

          {/* Tourist Places Section Ends */}


          {/* Order Now Section */}
          <div className='book-appointment-box'>
            <h4 className='my-heading1'>Online Hassle Free Booking</h4>
            <h3 className='my-heading2'> +1 874 801 8014</h3>
            <Link to="/book-an-appointment" className="btn btn-warning my-btn">Book your Tour Today</Link>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Home;
