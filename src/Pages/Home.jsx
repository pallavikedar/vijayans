import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import TestimonialSlidervideo from "../Component/TestimonialSlidervideo";
import chooseImg from "../Assets/Images/bgyog.jpeg";
import g1 from "../Assets/Images/g1.jpg";
import g2 from "../Assets/Images/g2.jpg";
import g3 from "../Assets/Images/g3.jpg";
import g4 from "../Assets/Images/g4.jpg";
import g5 from "../Assets/Images/g5.jpg";
import g6 from "../Assets/Images/program-2.jpg";
import SessionsVideo from "../Component/SessionsVideo";

import "../Style/home.css";
import GoogleReviewsWidget from "../Component/TestimonialSlider";

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
  }, [displayText, isDeleting, currentTextIndex, texts]);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const whyChooseRef = useRef(null);
  const whyChooseInView = useInView(whyChooseRef, { once: true });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  return (
    <div className="home-container">
      <motion.section
        ref={heroRef}
        className="home-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            {displayText} <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle">Do Yoga today for a better tomorrow</p>
          <motion.button
            className="hero-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </motion.section>

      <TestimonialSlidervideo />

      <motion.section
        ref={whyChooseRef}
        className="why-choose"
        initial={{ opacity: 0, x: -100 }}
        animate={whyChooseInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={chooseImg}
          alt="Why Choose Us"
          className="why-choose-img"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="why-choose-text">
          <h2 className="section-title">Why You Should Go To Yoga</h2>
          <p className="section-description">
            Yoga is more than just a workout; it’s a holistic practice that
            nurtures your body, mind, and soul. Whether you’re a beginner or an
            experienced practitioner, yoga offers countless benefits that can
            transform your life.
          </p>
          <ul className="why-choose-list">
            <li>
              <span className="check-icon">✔</span> Yoga boosts brain power
            </li>
            <li>
              <span className="check-icon">✔</span> Yoga improves flexibility
              and strength
            </li>
            <li>
              <span className="check-icon">✔</span> Yoga helps alleviate stress
              and anxiety
            </li>
            <li>
              <span className="check-icon">✔</span> Yoga promotes relaxation and
              well-being
            </li>
            <li>
              <span className="check-icon">✔</span> Yoga improves
              self-confidence
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        ref={galleryRef}
        className="gallery"
        initial={{ opacity: 0 }}
        animate={galleryInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
              onClick={() => setSelectedImage(img)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Selected" className="lightbox-img" />
          </div>
        )}
      </motion.section>

      <section className="placeholder-section">
        <h2 className="section-title">Sessions & Reviews</h2>
        <p className="section-description">
          Placeholder for SessionsVideo and GoogleReviewsWidget components.
        </p>
        <SessionsVideo />
      </section>
      <GoogleReviewsWidget />
    </div>
  );
}

export default Home;
