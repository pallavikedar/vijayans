import problemImg from "../Assets/Images/Group 128.jpg" // Add a relevant image
import "../Style/chetna.css"

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
  ]
  return (
    <div className="chetna_container">
      <h1 className="chetna_heading">Welcome to Chetna Consciousness</h1>

      <div className="chetna_program_text">
        <h2>Features of the Program</h2>
        <div className="chetna_problem_image">
          <img src={problemImg || "/placeholder.svg"} alt="Children Problems" />
        </div>
        <div>
          <p>
            In today's modern world children are no doubt physically and mentally very active. To cope up with the
            increasing pressure both at home and school children need some kind of physical and mental activity that
            would not only keep up their energy levels but also help them in maintaining it. Apart from sports and
            ground activities there needs to be a distinctive way to give them a better life not only now but also in
            future. To achieve this there is nothing like regular practice of yoga. Yoga is beyond physical exercise.
          </p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="chetna_problem_section">
        <h2>Problems Faced by Children and Youngsters</h2>

        <div className="chetna_problem_list">
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
      </div>
    </div>
  )
}

export default Chetna

