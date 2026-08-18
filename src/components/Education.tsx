import "./styles/Education.css";

const educationData = [
  {
    year: "2028",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Chitkara University",
    description: "CGPA: 9.43/10",
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-heading">
          My <span>Education</span>
        </h2>
        <div className="education-inner">
          <div className="education-list">
            {educationData.map((item, index) => (
              <div className="education-box" key={index}>
                <div className="education-info">
                  <h3>{item.degree}</h3>
                  <div className="education-institution-row">
                    <h4>{item.institution}</h4>
                    <span className="education-year">{item.year}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
