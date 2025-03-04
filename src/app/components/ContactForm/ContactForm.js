'use client';
import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const [formStatus, setFormStatus] = useState(null);
  const [statusType, setStatusType] = useState('');

  function handleContactFormChange(e) {
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  function handleContactFormSubmit(e) {
    e.preventDefault()

    const serviceID = 'service_45epnth'
    const templateID = 'template_42eqygq'
    const userID = 'qkxk7Xq__kuqy6IQu'

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then((response) => {
        console.log('Form submitted', formData);
        setFormStatus('Form submitted successfully!');
        setStatusType('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send the form:', error);
        setFormStatus('An error occurred. Please try again.');
        setStatusType('error');
      })
  }

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleContactFormSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleContactFormChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleContactFormChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleContactFormChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleContactFormChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      {formStatus && <div className={`${styles.formStatus} ${statusType === 'success' ? styles.success : styles.error}`}>{formStatus}</div>}
    </div>
  )
}