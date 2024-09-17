import ".././Contact/Contact.css"
import msg_icon from "../../edusity_assets/msg-icon.png"
import mail_icon from "../../edusity_assets/mail-icon.png"
import phone_icon from "../../edusity_assets/phone-icon.png"
import location_icon from "../../edusity_assets/location-icon.png"
import white_arrow from "../../edusity_assets/white-arrow.png"
import { useState } from "react"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5704ec6c-3152-48b7-bed5-f4e2b30808f4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon} alt="" /></h3>
        <p>We’re here to help! Whether you have questions, need support, or want to share your feedback, our team is ready to assist. Please reach out through the contact form below, and we’ll get back to you as soon as possible. Your inquiries are important to us, and we look forward to connecting with you! </p>
        
        <ul>
            <li> <img src={mail_icon} alt="" />muzamiln213@gmail.com</li>
            <li> <img src={phone_icon} alt="" /> +91 6006318647</li>
            <li> <img src={location_icon} alt="" />delhi india </li>
        </ul>

      </div>
      <div className="contact-col">
        <form  onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text"  name = "name" placeholder="Enter your name" required/>
          <label >Phone Number</label>
          <input type="tel" name = "phone" placeholder="Enter your mobile number" required />
          <label >Write your message here</label>
          <textarea name="message" rows= "6"placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn"> submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contact
