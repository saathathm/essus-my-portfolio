import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "reactjs-popup";

export default function Contact() {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState("");
  const [textColor, setTextColor] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0zbu18p", // Replace with your EmailJS Service ID
        "template_61aes5g", // Replace with your EmailJS Template ID
        form.current,
        "iszr_-SGcaKKcu67W" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setTextColor("lightGreen");
          setPopupMessage("Message Sent Successfully!");
          setOpenPopup(true);
          e.target.reset();
        },
        (error) => {
          setTextColor("red");
          setPopupMessage("Failed to Send Message. Try Again!");
          setOpenPopup(true);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="input-box">
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            required
          />
        </div>

        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>

      {/* Popup Message */}
      <Popup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        position="top center"
      >
        <div className="popup-msg"
          style={{
            color: textColor,
          }}
        >
          {popupMessage}
        </div>
      </Popup>
    </section>
  );
}
