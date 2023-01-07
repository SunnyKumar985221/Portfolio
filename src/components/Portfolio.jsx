import React from "react";
import { Link } from "react-scroll"
import sunny from '../images/sunny.jpg'
import sunny1 from '../images/sunny1.png'
import sunny2 from '../images/sunny2.png'
import nexusgram from '../images/nexusgram.png'
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
      <div className="row port1" style={{ backgroundColor: "#1a1d1a" }}>
      <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-right" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={nexusgram} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Social Media App</h5>
              <p className="card-text p-2"><b>Tech Used</b> - React.Js </p>
              <Link onClick={()=> window.open("https://nexusgram.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Site</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-down" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Dashboard</h5>
              <p className="card-text p-2"><b>Tech Used</b> - React.Js , Node.Js , MongoDB</p>
              <Link onClick={()=> window.open("https://nexus-dashboard.netlify.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Hotel Management System</h5>
              <p className="card-text p-2"><b>Tech Used</b> - React.Js , Node.Js , MongoDB</p>
              <Link onClick={()=> window.open("https://turtleneck-piglet.cyclic.app/", "_blank")} className="btn btn-primary d-flex justify-content-center text-light">Visit Website</Link>
            </div>
          </div>
        </div>
        
      </div>




    </div>

  );
};

export default Portfolio;
