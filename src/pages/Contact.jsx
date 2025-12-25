import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_moq4wq8",
        "template_fb60tza",
        templateParams,
        "mDKyRWP-_7lCIZhxx"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          let errorMessage = error.text || error.message || JSON.stringify(error);
          
          // Check for specific Gmail API error
          if (errorMessage.includes("insufficient authentication scopes")) {
            errorMessage = "Error: EmailJS Gmail permission missing. Please go to EmailJS Dashboard -> Email Services -> Reconnect Gmail and grant 'Send email' permission.";
          }
          
          setStatus("Failed to send message: " + errorMessage);
        }
      );
  };

  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Contact Us</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Contact Form Area =================*/}
      <section className="contact_form_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Get In Touch</h2>
            <h5>Do you have anything in mind to let us know? Kindly don't hesitate to connect to us by means of our contact form.</h5>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <form className="row contact_us_form" ref={form} onSubmit={sendEmail} id="contactForm" noValidate>
                <div className="form-group col-md-6">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group col-md-6">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="Email address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group col-md-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group col-md-12">
                  <textarea 
                    className="form-control" 
                    name="message" 
                    id="message" 
                    rows="1" 
                    placeholder="Write message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <button type="submit" className="btn order_s_btn form-control">submit now</button>
                  {status && <p style={{ marginTop: "10px", color: status.includes("success") ? "green" : "red" }}>{status}</p>}
                </div>
              </form>
            </div>
            <div className="col-lg-4 offset-md-1">
              <div className="contact_details">
                
                <div className="contact_d_item">
                  <h5>Phone : <a href="tel:+92 341 3663416">+92 341 3663416</a></h5>
                  <h5>Email : <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dryums.bakery@gmail.com&su=Dr-Yums%20Inquiry&body=Hello%20Team," target="_blank" rel="noopener noreferrer"><i className="">dryums.bakery@gmail.com</i></a></h5>
                </div>
                <div className="contact_d_item">
                  <h3>Opening Hours :</h3>
                  <p>10:00 AM – 8:00 PM</p>
                  <p>Monday – Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Contact Form Area =================*/}


      {/*================Special Area =================*/}
      <section className="special_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Dr-Yums is now taking orders via WhatsApp. </h2>
            <h5>Send a message to [+92 341 3663416].<br />
              Browse our menu or tell us your cravings.<br />
              Specify quantities, flavors, and any special requests.<br />
              Choose your preferred pick-up time or delivery option (if available).<br />
              We'll confirm your order and send you payment details.<br />
              Sit back, relax, and await your sweet treat! </h5>
          </div>
          <div className="special_item_inner">
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-4">
                  <div className="s_left_img">
                    <img className="img-fluid" src="/img/special/special-1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="special_item_text">
                    <h4>Call Or A Send Message </h4>
                    {/* <a href="https://wa.me/923413663416" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a> */}
                    <a className="pink_btn" target="_blank" href="https://wa.me/923413663416">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="s_item_left">
                    <div className="main_title">
                      <h2>Don't forget to:</h2>
                    </div>
                    <ul className="list_style">
                      <li>
                        <Link to="#">
                          Tell us your preferred pick-up location (if applicable).<br />
                          Feel free to ask us any questions about our menu or ingredients.<br />
                          We're excited to make your dessert dreams a reality, one WhatsApp message at a time!
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="s_right_img">
                    <img className="img-fluid" src="/img/product/product-details-1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Special Area =================*/}
    </div>
  );
};

export default Contact;
