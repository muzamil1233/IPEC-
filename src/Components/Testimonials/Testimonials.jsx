import ".././Testimonials/Testimonials.css"
import next_icon from "../../edusity_assets/next-icon.png"
import back_icon from "../../edusity_assets/back-icon.png"
import user_1 from "../../edusity_assets/kamran.jpg"
import user_2 from "../../edusity_assets/arif.jpg"
import user_3 from "../../edusity_assets/arshid.jpg"
import user_4 from "../../edusity_assets/testinmonial.jpg"
import { useRef } from "react"

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    
    const  slideForward = () => {
          if( tx > -50){
            tx -= 25
          }
          slider.current.style.transform  = `translateX(${tx}%)`;
    }
    const  slideBackward = () => {
        if( tx < 0){
            tx += 25
          }
          slider.current.style.transform  = `translateY(${tx}%)`;
    
    }
  return (
    <div className="testimonials">
        <img src={next_icon} alt=""  className="next-btn" onClick={slideForward}/>
        <img src={back_icon} alt=""  className="back-btn" onClick={slideBackward}/>
        <div className="slider">
            <ul ref = {slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                           <div>
                            <h3>Kamran Rashid Thoker</h3>
                            <span>Kulgam J&K</span>
                        </div> 
                        </div>
                     <p>The IPEC program was a game-changer for me. It offered practical, hands-on experience and invaluable mentorship that helped refine my business ideas and gave me the confidence to pursue my startup. The skills and insights I gained have been crucial in shaping my entrepreneurial journey.</p>   
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                           <div>
                            <h3>MD Arif </h3>
                            <span>Gorakpur UP</span>
                        </div> 
                        </div>
                     <p>IPEC exceeded my expectations with its blend of creativity and business fundamentals. The program's collaborative environment and real-world applications broadened my perspective and enhanced my entrepreneurial skills. It’s given me the tools and inspiration to turn my ideas into action.</p>   
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                           <div>
                            <h3>Arshid</h3>
                            <span>Laxmi nager Delhi</span>
                        </div> 
                        </div>
                     <p>IPEC transformed my approach to entrepreneurship. The experiential learning and strategic guidance helped me develop practical skills and tackle challenges effectively. The program’s support has been instrumental in launching my own business with newfound confidence</p>   
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                           <div>
                            <h3>Muzamil nabi</h3>
                            <span>Sopore J&k</span>
                        </div> 
                        </div>
                     <p>Participating in IPEC was a pivotal moment for me. The program’s dynamic curriculum and industry feedback provided me with the practical skills and determination needed to start my own venture. I’m now equipped to make a significant impact in my field.</p>   
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
