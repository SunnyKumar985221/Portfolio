import "./about.css";
import profile from '../images/profile.jpg'
import mern from '../images/mern.png'
import { FcReddit } from "react-icons/fc";
const Home = () => {
  let iconStyles = { color: "green", fontSize: "150px" };
  return (
    <div name="home">
      <div className="about1 home_bg">
      
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <span className="about2">
              Hi ! <br/> My Name is Sunny Kumar<br/><span className="about6" style={{"fontSize":"20px"}}>Full Stack Web Developer</span>
              <p className="resume" onClick={()=> window.open("/cv.pdf", "_blank")}><span className="buttonClass">View my resume</span></p>
            </span>
          
          </div>
  
          <div className="col-md-6 d-flex justify-content-center">
            <span className="about2">
            <img className="about5" src={mern}/>
            <img className="about3" style={{width:"250px"}} src={profile} />
            </span>

          </div>
        </div>
      </div>




    </div>
  )
}

export default Home