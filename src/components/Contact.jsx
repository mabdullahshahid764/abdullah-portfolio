import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Contact({ showToast }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    access_key: 'YOUR_ACCESS_KEY_HERE' // Replace with your actual Web3Forms access key
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        showToast();
        // Trigger celebratory confetti effect
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          access_key: 'YOUR_ACCESS_KEY_HERE'
        });
      } else {
        showToast(); // fallback toast for demonstration
      }
    } catch (err) {
      showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">07. Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <div className="underline"></div>
        </div>

        <div className="grid-2 gap-4">
          {/* Contact Details */}
          <div className="contact-info">
            <h3>Let's Collaborate!</h3>
            <p>
              If you have an internship opportunity, a project proposal, or just want to connect, feel free to drop a message. I will do my best to get back to you as soon as possible.
            </p>

            <div className="contact-cards">
              <div className="contact-detail-card glassmorphism">
                <div className="contact-card-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="contact-card-text">
                  <span>Email Me</span>
                  <a href="mailto:mabdullahshahid764@gmail.com">mabdullahshahid764@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-card glassmorphism">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div className="contact-card-text">
                  <span>Call Me</span>
                  <a href="tel:03414097821">0341-4097821</a>
                </div>
              </div>

              <div className="contact-detail-card glassmorphism">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-card-text">
                  <span>Location</span>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="social-links-footer">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glassmorphism">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="form-name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="form-email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="form-subject"
                  required
                  placeholder="Internship Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea
                  name="message"
                  id="form-message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-submit"
              >
                {loading ? (
                  <>Sending... <i className="fa-solid fa-spinner fa-spin"></i></>
                ) : (
                  <>Send Message <i className="fa-solid fa-paper-plane"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
