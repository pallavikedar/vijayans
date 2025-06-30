import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import chooseImg from "../Assets/Images/bgyog.jpeg";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import "../Style/home.css";
import wlmimg from "../Assets/Images/welcomeimg.jpg";
import TestimonialSlider from "../Component/TestimonialSlider";
import g1 from "../Assets/Images/g1.jpg";
import g2 from "../Assets/Images/g2.jpg";
import g3 from "../Assets/Images/g3.jpg";
import g4 from "../Assets/Images/g4.jpg";
import g5 from "../Assets/Images/g5.jpg";
import g6 from "../Assets/Images/program-2.jpg";
import TestimonialSlidervideo from "../Component/TestimonialSlidervideo";
import SessionsVideo from "../Component/SessionsVideo";
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

  // Typing effect logic
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

  // Scroll-based animation hooks
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, { once: true });

  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  const membershipRef = useRef(null);
  const membershipInView = useInView(membershipRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="home_hero_img"
        initial={{ opacity: 0, y: -50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="hero_text_side">
          <h2>
            {displayText} <span className="cursor">|</span>
          </h2>
          <p> Do Yoga today for a better tomorrow</p>
          <motion.button
            className="hero_section_button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Testimonial Video Section */}
      <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, x: -100 }}
        animate={testimonialInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <TestimonialSlidervideo />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="why_choose_container"
        initial={{ opacity: 0, x: -100 }}
        animate={testimonialInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="why_choose_img">
          <motion.img
            src={chooseImg}
            alt="Choose Us"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
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
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        ref={galleryRef}
        className="home_gallery_section"
        initial={{ opacity: 0 }}
        animate={galleryInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="section_title1">Our Gallery</h1>
        <div className="home_gallery_container">
          {galleryImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Selected" className="lightbox_image" />
          </div>
        )}
      </motion.div>
 <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, x: -100 }}
        animate={testimonialInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <SessionsVideo />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <GoogleReviewsWidget/>
      </motion.div>
    </>
  );
}

export default Home;