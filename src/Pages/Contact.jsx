import React from "react";
import "../Style/ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const branches = [
     {
    title: "Jaripatka",
    address: `Sindhu Society Main Rd, Indira Colony, Jaripatka, Nagpur, Maharashtra 440014`,
    mobile: ["+91-9422439804/5", "+91-9823189804"],
    email: "vijayan.yoga@gmail.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2!2d79.088!3d21.1826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVijayan%27s%20Yoga!5e0!3m2!1sen!2sin!4vXXXXXXXXXXXX!5m2!1sen!2sin"
    },
  {
    title: "Pratap Nagar",
    address: `Plot No. 1, Sarvodaya Nagar, Near Ram Mandir,
Behind Khamla Telephone Exchange, Nagpur - 440022.`,
    mobile: ["+91-9422439804/5", "+91-9823189804"],
    email: "vijayan.yoga@gmail.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1861.0474798708624!2d79.055007!3d21.10878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f39f70f6f1%3A0x18ba3b9e84f5c4c0!2sVijayan%27s%20Yoga%20Meditation%20Centre!5e0!3m2!1sen!2sus!4v1751282569080!5m2!1sen!2sus",
  },
  {
    title: "Seminary Hill's",
    address: `Plot No. 100, Corner House, 1st Floor, Nelco Society,
Opposite Union Bank Of India, Friends Colony Road, Nagpur.`,
    mobile: ["+91-9422439804/5", "+91-9823189804"],
    email: "vijayan.yoga@gmail.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.1552686580064!2d79.045053!3d21.167473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1ca40c20edd%3A0xa6c173481ea8f2bb!2sVijayan%27s%20Yoga!5e0!3m2!1sen!2sus!4v1751282589717!5m2!1sen!2sus",
  },
 
];

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h2 className="page-title">Contact Us</h2>
      <div className="branches">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <div className="branch-info">
              <h3>{branch.title}</h3>
              <p>
                <strong>Address:</strong><br />
                {branch.address}
              </p>
              <p>
  <strong>Mobile:</strong><br />
  {branch.mobile.map((num, i) => (
    <span key={i}>
      <FaPhoneAlt className="icon" />
      <a href={`tel:${num.replace(/[^\d+]/g, "")}`} className="phone-link">
        {num}
      </a>
      <br />
    </span>
  ))}
</p>
<p>
  <strong>Email:</strong><br />
  <FaEnvelope className="icon" />
  <a href={`mailto:${branch.email}`}>{branch.email}</a>
</p>

            </div>
            <div className="branch-map">
              <iframe
                src={branch.mapSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.title} map`}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
