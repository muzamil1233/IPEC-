import "../Campus/Campus.css"
import gallery_1 from '../../edusity_assets/testinmonial.jpg';
import gallery_2 from '../../edusity_assets/adil.jpg'
import gallery_3 from '../../edusity_assets/img 2.jpg';
import gallery_4 from '../../edusity_assets/muzamil.jpg';
import white_arrow from '../../edusity_assets/white-arrow.png';

const Campus = () => {
  return (
    <div className="campus">
       <div className="gallery">
        <img src= { gallery_1} alt="" />
        <img src= { gallery_2} alt="" />
        <img src= { gallery_3} alt="" />
        <img src= { gallery_4} alt="" />
        
       </div>
       <button className="btn dark-btn">see more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
