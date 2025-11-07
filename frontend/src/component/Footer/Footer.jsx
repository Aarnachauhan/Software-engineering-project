import React from 'react';
import './Footer.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaExclamationTriangle,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">Hostel Management</h3>
            <p className="footer-description">
              Streamlining hostel complaints and maintenance requests.
            </p>
            <div className="emergency-box">
              <FaExclamationTriangle className="emergency-icon" />
              <div>
                <span className="emergency-label">Emergency</span>
                <span className="emergency-number">+91 98765XXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/new-complaint">Register Complaint</a></li>
              <li><a href="/track-complaint">Track Status</a></li>
              <li><a href="/hostel-rules">Hostel Rules</a></li>
              <li><a href="/faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>University Campus, City - 123456</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 1234567XXX</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>hostel@university.edu</span>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>Mon - Fri: 9AM - 6PM</span>
            </div>
          </div>

          {/* Important Contacts */}
          <div className="footer-section">
            <h3 className="footer-title">Important Contacts</h3>
            <div className="important-contacts">
              <div className="contact-card">
                <span className="contact-role">Warden</span>
                <span className="contact-number">+91 98765432XX</span>
              </div>
              <div className="contact-card">
                <span className="contact-role">Maintenance</span>
                <span className="contact-number">+91 98765432XX</span>
              </div>
              <div className="contact-card">
                <span className="contact-role">Security</span>
                <span className="contact-number">+91 98765432XX</span>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
            <div className="legal-links-vertical">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-conditions">Terms & Conditions</a>
              <a href="/disclaimer">Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Hostel Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;