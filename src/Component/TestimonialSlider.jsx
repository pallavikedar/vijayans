import React, { useState, useEffect } from "react";
import "../Style/Testimonial.css"; // Make sure this CSS file exists

const testimonials = [
  {
    id: 1,
    text: "Before joining Vijayans Yoga, I was suffering from Spondylitis, but now I don’t feel any pain in my back.",
    author: "Mr. Shyam Jaiswal",
  },
  {
    id: 2,
    text: "Before joining Vijayans Yoga, I had low stamina and various health issues, but within a month, I saw great improvements.",
    author: "Smt. Hema Dubey",
  },
  {
    id: 3,
    text: "Vijayan Sir’s guidance and motivation have transformed my life. Yoga helped me achieve my health goals and inner peace.",
    author: "Manisha Malpani",
  },
  {
    id: 4,
    text: "Under the guidance of Yogacharya Vijayan Raman, I lost weight and gained a positive outlook on life.",
    author: "Mr. Shrikant Panpaliya",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure testimonials array is not empty
  const isValidIndex = currentIndex >= 0 && currentIndex < testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < testimonials.length ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isValidIndex) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="testimonial-slider1">
    <h2 className="section_title1">Our Testimonials</h2>
      <div className="testimonial-content">
        <div className="testimonial-card fade-in">
          <p className="testimonial-text">"{testimonials[currentIndex]?.text}"</p>
          <p className="testimonial-author">- {testimonials[currentIndex]?.author}</p>
        </div>
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
