import React, { useState, useEffect } from "react";
import Slider from "../Component/Slider";
import chooseImg from "../Assets/Images/bgyog.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import "../Style/home.css";
import wlmimg from "../Assets/Images/welcomeimg.jpg";
import TestimonialSlider from "../Component/TestimonialSlider";
import g1 from "../Assets/Images/g1.jpg";
import g2 from "../Assets/Images/g2.jpg";
import g3 from "../Assets/Images/g3.jpg";
import g4 from "../Assets/Images/g4.jpg";
import g5 from "../Assets/Images/g5.jpg";
import g6 from "../Assets/Images/program-2.jpg";
import heroImg from "../Assets/Images/69838505757.png";
import founder from '../Assets/Images/vijayansphoto-removebg-preview.png'
import { FaArrowRight } from "react-icons/fa";
import TestimonialSlidervideo from "../Component/TestimonialSlidervideo";
import SessionsVideo from "../Component/SessionsVideo";

function Home() {
  const texts = [
    "Welcome to VIJAYAN'S YOGA!",
    "We provide the best yoga services.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [g1, g2, g3, g4, g5, g6];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDeleting = 4000;

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, currentTextIndex]);
  return (
    <>
      {/* <Slider /> */}

      <div className="home_hero_img">
        <div className="hero_text_side">
          <h2>
            {displayText} <span className="cursor">|</span>
          </h2>
          <p> Do Yoga today for a better tomorrow</p>
          <button className="hero_section_button"> Learn More</button>
        </div>
       
        
      </div>
     
      <div>
       <TestimonialSlidervideo/>
       </div>
      <div className="why_choose_container">
        <div className="why_choose_img">
          <img src={chooseImg} alt="Choose Us" />
        </div>
        <div className="why_choose_text">
          <h2>Why You Should Go To Yoga</h2>
          <p className="choose_lorem">
            Yoga is more than just a workout; it’s a holistic practice that
            nurtures your body, mind, and soul. Whether you’re a beginner or an
            experienced practitioner, yoga offers countless benefits that can
            transform your life.
          </p>
          <div className="choose_point">
            <p>
              <FaCheckCircle /> Yoga boosts brain power
            </p>
            <p>
              <FaCheckCircle /> Yoga improves flexibility and strength
            </p>
            <p>
              <FaCheckCircle /> Yoga helps alleviate stress and anxiety
            </p>
            <p>
              <FaCheckCircle /> Yoga promotes relaxation and well-being
            </p>
            <p>
              <FaCheckCircle /> Yoga improves self-confidence and confidence in
              yourself
            </p>
          </div>
        </div>
      </div>
      <div>
       <SessionsVideo/>
       </div>
      <div className="welcome_container">
      {/* Left Side - Image */}
     

      {/* Right Side - Text */}
      <div className="welcome_text_container">
        <h2 className="welcome_heading">Welcome to Vijayan's Yoga</h2>
        <p>
          Vijayan’s Yoga Centre is a holistic wellness hub dedicated to
          promoting lifelong health through yoga. With tailored programs
          designed by Yogratna Yogacharya Vijayan C. Raman, the centre caters
          to diverse needs, from general fitness to addressing specific health
          conditions such as back pain, diabetes, arthritis, and even cancer
          rehabilitation.
        </p>
        <p>
          At Vijayan’s Yoga, solutions are available for various diseases like back
          problems, B.P., diabetes, arthritis, menstrual problems, and also
          rehabilitation for cancer patients. This is achieved completely through
          yoga. The main goal is to strengthen immunity, enabling individuals to
          fight against diseases naturally through yoga and a balanced diet.
        </p>
        <button className="welcome_read_more_button">
          Read More <FaArrowRight className="icon" />
        </button>
      </div>
      <div className="wlc_img_container">
      <img src={wlmimg} alt="Vijayan's Yoga" className="welcome_image" />
    </div>
    </div>

    <div className="home_gallery_section">
    <h1 className="section_title1">Our Gallery</h1>
    <div className="home_gallery_container">
      {galleryImages.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index + 1}`} onClick={() => setSelectedImage(img)} />
      ))}
    </div>
    {/* Lightbox Modal */}
    {selectedImage && (
      <div className="lightbox" onClick={() => setSelectedImage(null)}>
        <img src={selectedImage} alt="Selected" className="lightbox_image" />
      </div>
    )}
  </div>

  {/* Membership Cards Section */}
  <div className="membership">
  <h1 className="section_title">Membership Cards</h1>
  <div className="memberShipDetail_card_wrapper">
    {["YEAR", "MONTHLY"].map((type, index) => (
      <div className="memberShip_card_container" key={index}>
        <div className="memberShip_card">
          <p className="card_title">{type} CARD</p>
          
          <p className="card_duration">For 1 {type === "YEAR" ? "Year" : type === "MONTHLY" }</p>
          <ul className="card_features">
            <li>Enjoy All The Features</li>
            <li>Onetime Access To All Club</li>
            <li>Group Trainer</li>
            <li>Book A Group Class</li>
            <li>Fitness Orientation</li>
          </ul>
          <button className="book_button">Get Started <FaArrowRight /></button>
        </div>
      </div>
    ))}
  </div>
  </div>

  {/* Testimonials Section */}
 
   
    <TestimonialSlider />

    </>
  );
}

export default Home;
