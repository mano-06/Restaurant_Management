import React, { useState } from 'react';
import style from './styles/Contactus.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={style.contactPage}>
      <div className={style.contactContainer}>
        <div className={style.contactInfo}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>

          <div className={style.contactDetails}>
            <div className={style.contactItem}>
              <h3>Address</h3>
              <p>123 Restaurant Street</p>
              <p>Sitra, Coimbatore 641 202</p>
            </div>

            <div className={style.contactItem}>
              <h3>Phone</h3>
              <p>+91 97866 56222</p>
            </div>

            <div className={style.contactItem}>
              <h3>Email</h3>
              <p>info@saffron.com</p>
            </div>

            <div className={style.contactItem}>
              <h3>Hours</h3>
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className={style.contactFormContainer}>
          {isSubmitted ? (
            <div className={style.successMessage}>
              <h2>Thank you for your message!</h2>
              <p>We've received your inquiry and will get back to you soon.</p>
            </div>
          ) : (
            <form className={style.contactForm} onSubmit={handleSubmit}>
              <div className={style.formGroup}>
                <label htmlFor="name">Name <span className={style.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? style.error : ''}
                />
                {formErrors.name && <span className={style.errorText}>{formErrors.name}</span>}
              </div>

              <div className={style.formGroup}>
                <label htmlFor="email">Email <span className={style.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? style.error : ''}
                />
                {formErrors.email && <span className={style.errorText}>{formErrors.email}</span>}
              </div>

              <div className={style.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? style.error : ''}
                />
                {formErrors.phone && <span className={style.errorText}>{formErrors.phone}</span>}
              </div>

              <div className={style.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="message">Message <span className={style.required}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? style.error : ''}
                ></textarea>
                {formErrors.message && <span className={style.errorText}>{formErrors.message}</span>}
              </div>

              <button type="submit" className={style.submitButton}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;