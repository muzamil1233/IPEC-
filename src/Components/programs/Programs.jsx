
import "./programs.css"
import program_1 from "../../edusity_assets/program-1.png"
import program_2 from "../../edusity_assets/program-2.png"
import program_3 from "../../edusity_assets/program-3.png"
import program_icon1 from "../../edusity_assets/program-icon-1.png"
import program_icon2 from "../../edusity_assets/program-icon-2.png"
import program_icon3 from "../../edusity_assets/program-icon-3.png"


const Programs = () => {
  return (
    <div className='programs ' id = "program">
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon1} alt="" />
                <p>BBA/BCA Degree </p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon2} alt="" />
                <p>B.TECH Degree </p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon3} alt="" />
                <p>M.TECH Degree </p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
