import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-bg">
        <div className="footer-area">
          {/* <!-- Nested Container Starts --> */}
          <div className="container">
            <div className="row">
              {/* <!-- Hosptial Information Starts --> */}
              <div className="col-md-3 col-sm-4 col-xs-12">
                <h4>Travalley</h4>
                <p>
                  We are the very best you will ever find out there. Committed to give quality services and experience the nature.
                </p>
                <ul className="list-unstyled address-list">
                  <li className="clearfix address">
                    Shilparamam Lonsdale St. Marks Road, Talay Victoria 8011 New York.
                  </li>
                </ul>
              </div>
              {/* <!-- Hosptial Information Ends --> */}
              {/* <!-- Services Starts --> */}
              <div className="col-md-2 col-sm-4 col-xs-12">
                <h4>Services</h4>
                <ul className="list-unstyled">
                  <li><a href="#"> Norway</a></li>
                  <li><a href="#"> Rome</a></li>
                  <li><a href="#"> Italy</a></li>
                  <li><a href="#"> Hawaii</a></li>
                  <li><a href="#"> Dubai</a></li>
                  <li><a href="#"> Jerusalem</a></li>
                </ul>
              </div>
              {/* <!-- Services Ends --> */}
              {/* <!-- Twitter Starts --> */}
              <div className="col-md-3 col-sm-4 col-xs-12">
                <h4 className='text-start'>Twitter</h4>
                <ul className="list-unstyled tweets-list">
                  <li>
                    Travalley's Website Launched.
                    <a href="#">http://t.co/xyz12abc</a>
                  </li>
                  <li>
                    Travalley's Twitter Page, please follow.
                    <a href="#">http://t.co/testlink</a>
                  </li>
                  <li>
                    Angel Aid's Facebook Page, please like.
                    <a href="#">http://t.co/abc123link</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Twitter Ends -->
                        <!-- Signup Newsletter Starts --> */}
              <div className="col-md-4 col-xs-12 newsletter-block">
                <h4>Signup Newsletter</h4>
                <form action="#" className="newsletter">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Email Address" />
                  </div>
                  <button type="submit" className="btn btn-lg btn-block btn-secondary">Submit</button>
                </form>
              </div>
              {/* <!-- Signup Newsletter Ends --> */}
            </div>
          </div>
          {/* <!-- Nested Container Ends --> */}
        </div>
        {/* <!-- Footer Area Ends -->

            <!-- Copyright Starts --> */}
        <div className="copyright">
          <div className="container d-flex justify-content-center">
            <p className="mx-auto">Copyright 2021. AlL Rights Reserved By <span>Travalley</span>
            </p>
          </div>
        </div>
        {/* <!-- Copyright Ends --> */}
      </footer>
    </div >
  );
};

export default Footer;
