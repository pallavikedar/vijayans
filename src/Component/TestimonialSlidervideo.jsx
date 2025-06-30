import React, { useState, useEffect, useRef } from "react";
import "../Style/Testimonialvideo.css";
import { motion, useInView } from "framer-motion";
import video1 from "../Assets/Video/review1.mp4";
import video2 from "../Assets/Video/review2.mp4";
import video3 from "../Assets/Video/review3.mp4";
import video4 from "../Assets/Video/review4.mp4";
import video5 from "../Assets/Video/review5.mp4";
import video6 from "../Assets/Video/review6.mp4";
import video7 from "../Assets/Video/review7.mp4";
import video8 from "../Assets/Video/review8.mp4";
import video9 from "../Assets/Video/review9.mp4";
import video10 from "../Assets/Video/review10.mp4";
import video11 from "../Assets/Video/review11.mp4";
import video12 from "../Assets/Video/review12.mp4";
import video13 from "../Assets/Video/review13.mp4";
import video14 from "../Assets/Video/review14.mp4";
import video15 from "../Assets/Video/review15.mp4";
import video16 from "../Assets/Video/review16.mp4";
import video17 from "../Assets/Video/review17.mp4";
import video18 from "../Assets/Video/review18.mp4";
import { CheckCircle, Flame, Dumbbell, HeartPulse, Leaf, BrainCircuit, SmilePlus, ShieldCheck, StretchHorizontal, UserCog, Sparkles, HeartHandshake } from "lucide-react";

const testimonials = [
  { id: 1, text: "Yoga has transformed my life!",video: video1 },
  { id: 2, text: "My stamina has increased!",video: video2 },
  { id: 3, text: "Yoga helped me mentally and spiritually.",  video: video3 },
  { id: 4, text: "A peaceful experience every day!",  video: video4 },
  { id: 5, text: "I feel healthier and happier!", video: video5 },
  { id: 6, text: "I feel healthier and happier!", video: video6 },
  { id: 7, text: "I feel healthier and happier!", video: video7 },
  { id: 8, text: "I feel healthier and happier!", video: video8 },
  { id: 9, text: "I feel healthier and happier!", video: video9 },
  { id: 10, text: "I feel healthier and happier!", video: video10 },
  { id: 11, text: "I feel healthier and happier!", video: video11 },
  { id:12, text: "I feel healthier and happier!", video: video12 },
  { id: 13, text: "I feel healthier and happier!", video: video13 },
  { id: 14, text: "I feel healthier and happier!", video: video14 },
  { id: 15, text: "I feel healthier and happier!", video: video15 },
  { id: 16, text: "I feel healthier and happier!", video: video16 },
  { id: 17, text: "I feel healthier and happier!", video: video17 },
  { id: 18, text: "I feel healthier and happier!", video: video18 },
];

const TestimonialSlidervideo = () => {
  const benefits = [
    { icon: <CheckCircle />, text: "Lose Weight Naturally" },
    { icon: <Flame />, text: "Boost Metabolism & Energy" },
    { icon: <Dumbbell />, text: "Enhance Strength & Flexibility" },
    { icon: <HeartPulse />, text: "Improve Heart & Gut Health" },
    { icon: <Leaf />, text: "Adopt a Healthier Lifestyle" },
    { icon: <BrainCircuit />, text: "Memory Development" },
    { icon: <SmilePlus />, text: "Freedom From Depression" },
    { icon: <ShieldCheck />, text: "Immune Development" },
    { icon: <StretchHorizontal />, text: "Body Shape & Toning" },
    { icon: <UserCog />, text: "Personality Development" },
    { icon: <Sparkles />, text: "Fitness & Flexibility of Body" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const videoRef = useRef(null);

  const handleUserInteraction = () => {
    setIsUserInteracted(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.log("Autoplay failed:", error));
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (isUserInteracted && video) {
      video.play().catch((error) => console.log("Autoplay failed:", error));
      video.onended = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 < testimonials.length ? prevIndex + 1 : 0));
      };
    }
  }, [currentIndex, isUserInteracted]);

  // Scroll-based animation hooks
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      className="testimonial-slider2"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      onClick={handleUserInteraction}
    >
      {/* Health Benefits Section */}
      <motion.div
        className="health-container"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="health-title">Transform Your Health & Fitness!</h1>
        <ul className="health-list">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="health-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {benefit.icon}
              <strong>{benefit.text}</strong>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Testimonial Video Section */}
      <motion.div
        className="testimonial-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <video ref={videoRef} key={testimonials[currentIndex].video} controls>
          <source src={testimonials[currentIndex].video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <motion.span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            ></motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSlidervideo;
