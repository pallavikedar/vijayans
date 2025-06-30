import React from 'react';

import "../Style/chetna.css";

function Chetna() {
  const features = [
    "Special motivation",
    "Helping learn self-discipline in early life",
    "Relieving the stress through yoga and meditation",
    "Special yoga sessions for health and mind development",
    "Making children mentally, physically and spiritually strong",
    "Increasing concentration through pranayama and meditation",
    "Teaching the power of oneness and unity through counseling",
    "Sessions of parents and children for an improved relationship",
    "Solving various issues through group and individual counseling",
    "Helping children to lead a quality life and become a better person",
    "Enhancing the imagination and empathy of children through meditation",
    "Helping children to bond with family and friends through yoga and its morals",
  ];

  return (
    <div className="chetna-container">
      <header className="chetna-header">
        <h1 className="chetna-heading">Welcome to Chetna Consciousness</h1>
      </header>

      <section className="chetna-program-section" role="region" aria-labelledby="features-heading">
        <h2 id="features-heading">Features of the Program</h2>
        <div className="chetna-content-wrapper">
          
          <div className="chetna-text-content">
            <p>
              In today's fast-paced world, children face increasing physical and mental challenges. To manage the pressures of home and school, they need activities that sustain their energy and foster long-term well-being. Beyond sports, yoga offers a holistic approach to development, promoting physical health, mental clarity, and emotional balance for a brighter future.
            </p>
            <ul className="chetna-features-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="chetna-problems-section" role="region" aria-labelledby="problems-heading">
        <h2 id="problems-heading">Problems Faced by Children and Youngsters</h2>
        <div className="chetna-problems-grid">
          <ul>
            <li>No discipline in life</li>
            <li>Being stubborn</li>
            <li>No patience</li>
            <li>Short-temper</li>
            <li>Irritative mind</li>
            <li>Hyperactivity</li>
            <li>No self-respect</li>
            <li>Irresponsible behaviour</li>
            <li>Mismanagement of time</li>
            <li>Telling lies to suit their needs</li>
          </ul>
          <ul>
            <li>Unable to make good friends</li>
            <li>Do not listen to parents' advice</li>
            <li>Spending money unnecessarily</li>
            <li>Addiction to television and mobiles</li>
            <li>Bad habits and behavioural patterns</li>
            <li>Unable to express feelings and emotions</li>
            <li>Disrespectful behaviour towards parents</li>
            <li>No interest in studies due to extra activities</li>
            <li>Lack of love and understanding with family members</li>
            <li>Failure in maintaining proper relationship with parents</li>
          </ul>
          <ul>
            <li>Jealousy</li>
            <li>Laziness</li>
            <li>Mood swings</li>
            <li>Lack of confidence</li>
            <li>Impulsive behavior</li>
            <li>No social activities</li>
            <li>No physical activity</li>
            <li>Low immunity level</li>
            <li>Unhealthy food habits</li>
            <li>Sleep disorders</li>
          </ul>
          <ul>
            <li>No fixed routine in life</li>
            <li>Nervousness and stress</li>
            <li>No proper future planning</li>
            <li>Memory-related problems</li>
            <li>Stomach disorders</li>
            <li>Overweight / underweight</li>
            <li>Problems in decision-making</li>
            <li>Unable to promote individual skills</li>
            <li>Hormonal imbalances and its side effects</li>
            <li>Various health issues since childhood</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Chetna;