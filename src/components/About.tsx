import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hey! I'm Harekam, a 3rd-year Computer Science undergraduate at
          Chitkara University who enjoys turning ideas into simple, useful
          digital experiences.
        </p>
        <p className="para para-secondary">
          I'm passionate about software development, problem-solving, and
          exploring new technologies. I enjoy working across both frontend
          and backend development, and I'm always curious about how things
          work behind the scenes.
        </p>
        <p className="para para-secondary">
          I'm someone who learns best by actually building, experimenting,
          making mistakes, and figuring things out along the way. I also
          enjoy solving DSA problems and continuously improving my
          understanding of core computer science concepts.
        </p>
        <p className="para para-secondary">
          Right now, I'm focused on becoming a better software engineer,
          strengthening my technical skills, and working on opportunities
          where I can learn, contribute, and build things that genuinely
          make an impact.
        </p>
        <p className="about-tagline">
          Currently: Learning • Building • Solving • Improving 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
