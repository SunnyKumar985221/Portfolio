import React from "react";
import { Link } from "react-scroll"
import sunny from '../images/sunny.jpg'
import sunny1 from '../images/sunny1.png'
import sunny2 from '../images/sunny2.png'
import nexusgram from '../images/nexusgram.png';
import d_one from '../images/d-one.png';
import techno from '../images/techno.png';
import tree from '../images/tree.png';
import portfolio from '../images/prftfolio.png';
import nexusstore from '../images/nexusstore.png';
import './about.css';
import AOS from "aos";
import { useEffect } from "react";
import './about.css'
import "aos/dist/aos.css";
const Portfolio = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      name="project" className="h-max">
      <h1 className="port2" style={{ fontSize: "40px", backgroundColor: "#1a1d1a", color: "white" }}>Have a look on my Projects</h1>
      <h1 class='client-project'>Client Project</h1>
      <div className="row port1" style={{ backgroundColor: "#1a1d1a" }}>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-right" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={d_one} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Company Valuation App</h5>
              <p className="card-text p-2">Platform produces business valuations, financial statements, and investment analysis by combining user input with market data</p>
              <Link onClick={() => window.open("https://d-one.ae/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Site</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-down" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={techno} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Franchise Business</h5>
              <p className="card-text p-2">Platform produces franchise opportunity that provides entrepreneurs with the chance to own and operate their own business.</p>
              <Link onClick={() => window.open("http://www.technopaze.com/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={tree} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Tree Service</h5>
              <p className="card-text p-2">Platform give services releated to tree like tree root removal, fruit tree care, stump grinding, and much more!</p>
              <Link onClick={() => window.open("https://www.campbellstreeandstumpservice.com/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>

      </div>

      {/* Personal ongoing projects  */}
      <h1 class="personal-project">MERN stack ongoing project</h1>
      <div className="row port1" style={{ backgroundColor: "#1a1d1a" }}>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-right" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={nexusstore} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Fashion Ecommerce App</h5>
              <p className="card-text p-2">Fashion Ecommerce App ( Nexusstore) app is an online platform that showcases the latest fashion trends, styles, and products.</p>
              <Link onClick={() => window.open("https://nexusfashion.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Site</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-down" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Dashboard</h5>
              <p className="card-text p-2">This app typically provide a quick and concise overview of data that is relevant to a specific user or group of users, such as managers.</p>
              <Link onClick={() => window.open("https://nexus-dashboard.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Hotel Management System</h5>
              <p className="card-text p-2">Hotel Management App provide the best hotel, lodge or appartment in your city with most affordable price.</p>
              <Link onClick={() => window.open("https://turtleneck-piglet.cyclic.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>

      </div>
      {/* Personal ongoing projects  */}
      <h1 class="personal-project">React Project ( Frontend )</h1>
      <div className="row port1" style={{ backgroundColor: "#1a1d1a" }}>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-right" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={nexusgram} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Social Media App</h5>
              <p className="card-text p-2">This is only the frontend app, which has been designed solely for aesthetic purposes. It does not have any backend functionality.</p>
              <Link onClick={() => window.open("https://nexusgram.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Site</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-down" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Dashboard</h5>
              <p className="card-text p-2">This app typically provide a quick and concise overview of data that is relevant to a specific user or group of users, such as managers.</p>
              <Link onClick={() => window.open("https://nexus-dashboard.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={portfolio} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Portfolio App</h5>
              <p className="card-text p-2">A portfolio website is a platform where individuals or businesses can showcase their work, skills, and accomplishments</p>
              <Link onClick={() => window.open("https://nexussunny.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>

      </div>


    </div>

  );
};

export default Portfolio;
