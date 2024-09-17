
import "./About.css"
import  about_img from "../../edusity_assets/about.png"
import play_icon from "../../edusity_assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img} alt="" className='about_img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">

            <h3> ABOUT COLLEGE </h3>
            <h2>Nurturing tomarrows Leader today</h2>
            <p>At IPEC College, our mission is to cultivate a vibrant learning environment that inspires students to achieve their fullest potential. We are dedicated to fostering a culture of curiosity, critical thinking, and creativity.</p>
            <p> Our aim is to equip students with the knowledge, skills, and ethical foundation necessary to excel in their chosen fields and make meaningful contributions to society.
            </p>

        </div>
      
    </div>
  )
}

export default About
