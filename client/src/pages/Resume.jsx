import "../styles/Resume.css";

function Resume() {
  return (
    <div id="resume">
      <h2>Resume</h2>
      <p>
        Download my PDF resume{" "}
        <a
          id="downloadLink"
          href="./src/assets/Resume-Madison-Chazo.pdf"
          download
        >
          here
        </a>
        .
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul class="profs">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul class="profs">
        <li>Express</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}

export default Resume;
