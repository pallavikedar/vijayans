import React, { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../Style/Faq.css"; // Import the updated CSS file

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleShow = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Yoga?",
      answer:
        "Yoga is a way of life which helps to control mind and helps in developing your personality.",
    },
    {
      question: "How is Yoga helpful in our day to day life?",
      answer:
        "In our day to day life, a human being undergoes different kinds of stress. He is always searching for happiness and peace of mind. Real happiness lies within himself. A stable mind and well-tuned body can bring lasting joy, unlike materialistic happiness. Yoga helps control the mind and reduces physical and mental disorders.",
    },
    {
      question: "Which is the best time to perform Yoga?",
      answer:
        "Early in the morning. But if not possible then, You can practice Yoga in the evening at least four hours after your lunch.",
    },
    {
      question: "Should Yoga be practiced only in the morning?",
      answer:
        "You can practice yoga in the afternoon also, but your stomach should be empty while practicing. Considering our schedules, the time early in the morning is most suitable for study. The evening time about 4 hours after lunch is also suitable for practice, provided no additional food is taken in between.",
    },
    {
      question: "What is the meaning of Asana?",
      answer: "Asana is a steady and comfortable posture of the body.",
    },
    {
      question: "What is the difference between Yogasanas and other exercises?",
      answer:
        "Yoga is the Science as a whole. Yogic practices which are used for curing physical and mental disorders are referred to as Yogic Techniques.",
    },
    {
      question: "What is the advantage of Yoga over other Exercises?",
      answer:
        "Exercise increases strength and stamina of the muscles, but Yoga affects the complete body-mind complex and triggers a change from negative to positive direction on the physical, mental, and spiritual plane of existence.",
    },
    {
      question: "Can Yoga be helpful in weight reduction?",
      answer:
        "Yes, Yoga practices like Yogasana and Pranayama can improve digestion, which reduces excessive fat consumption of the body.",
    },
    {
      question: "Is there any age limit while performing Yoga?",
      answer:
        "Yoga can be practiced at all ages above twelve 12 years .It can be practiced at the age of 80, years. But one should do only those          asanas that are suitable to one?s physical conditions.",
    },
    {
      question:
        "Is it necessary for the user to be religious/God fearing to practice Yoga?",
      answer:
        "Certainly not .But you should have total faith in what you practice otherwise it will be fruitless .If you want to practice Yoga you must          have faith in Yoga.",
    },
    {
      question: "What is the easiest Yogic practice?",
      answer:
        "Shavasana,Omkar Chanting and Yoganidra. Patanjali?s Ashtanga Yoga which explains asanas,pranayama and meditation. Anybody can practice these techniques.",
    },
  ];

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center"}}>
    <div className="faq_container">
      <h1 className="faq_title">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq_item">
          <div className="faq_question" onClick={() => handleShow(index)}>
            {index + 1}. {item.question}
            {activeIndex === index ? (
              <FaCircleMinus className="faq_icon" />
            ) : (
              <FaCirclePlus className="faq_icon" />
            )}
          </div>
          <div className={`faq_answer ${activeIndex === index ? "show" : ""}`}>
            <FaArrowRight className="arrow_icon" /> {item.answer}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Faq;
