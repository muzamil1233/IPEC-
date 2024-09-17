
import "./Footer.css"
import {AiFillGithub ,AiFillLinkedin,AiFillInstagram} from  'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
        <p>@2024 IPEC. All rights reserved</p>
        <ul>
           <li><a href="https://www.linkedin.com/in/muzamil-nabi-1a2435224/"><AiFillLinkedin/></a></li>
           <li><a href="https://github.com/muzamil1233"><AiFillGithub/></a></li>
           <li><a href="https://www.instagram.com/muzamil_nabii"><AiFillInstagram/></a></li>
           <li>Privacy Policy</li>
        </ul>
      
    </div>
  )
}

export default Footer
