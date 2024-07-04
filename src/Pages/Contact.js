import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const { email, emailvalue } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      [email]: emailvalue,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
      [email]: validateField(name, emailvalue),
    }));
  };

  const validateField = (name, value) => {
    if (name === "name" && !value) {
      return "Username is required";
    }
    if (name === "email") {
      if (!value) {
        return "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        return "Email address is invalid";
      }
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully", formData);
      setFormData({
        name: "",
        email: "",
      });
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-form">
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i>

                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i>
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-formm">
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Username"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  name="email"
                  className="input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <span>Email</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
