import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./aboutus.scss";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div id="navvisiback"></div>
      <div id="freespace"></div>
      <div class="contact-info">
        <a href="mailto:info@example.com">
          <i class="fa fa-envelope"></i>Email: secondsj2002@gmail.com
        </a>
        <p>I'm daily acive on email</p>
        <p style={{ textAlign: "center" }}>
          Feel free to reach out to us via email with any inquiries, <br />{" "}
          feedback, or questions you may have. <br /> We strive to respond to
          all messages within 24 hours.
        </p>

        <p>
          Please note that the Email provided is for messaging purposes only.
        </p>
        <p>
          Thank you for your interest in contacting us. We look forward to
          hearing from you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
