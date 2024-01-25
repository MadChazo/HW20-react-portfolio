import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div id="portfolio">
      <h2 id="portfolioTitle">Portfolio</h2>
      <div className="card">
        <h3 class="projectTitle">Homework - Portfolio</h3>
        <img
          src="./src/assets/HW2-Screenshot.png"
          alt="screenshot of portfolio website"
          class="projectPic"
        />
        <span class="spacer"></span>
        <a class="projectLink" href="https://github.com/MadChazo/HW2-portfolio">
          GitHub
        </a>
        <span>|</span>
        <a class="projectLink" href="https://madchazo.github.io/HW2-portfolio/">
          Deployed App
        </a>
      </div>
      <div className="card">
        <h3 class="projectTitle">Mini Project - Landing Page</h3>
        <img
          src="./src/assets/MP1-Screenshot.png"
          alt="screenshot of elephant website"
          class="projectPic"
        />
        <span class="spacer"></span>
        <a
          class="projectLink"
          href="https://github.com/MadChazo/MP1-landing-page"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          class="projectLink"
          href="https://madchazo.github.io/MP1-landing-page/"
        >
          Deployed App
        </a>
      </div>
      <div className="card">
        <h3 class="projectTitle">Project - PokeDisple</h3>
        <img
          src="./src/assets/P1-Screenshot.png"
          alt="screenshot of Pokemon website"
          class="projectPic"
        />
        <span class="spacer"></span>
        <a class="projectLink" href="https://github.com/MadChazo/P1-pokedisple">
          GitHub
        </a>
        <span>|</span>
        <a class="projectLink" href="https://madchazo.github.io/P1-pokedisple/">
          Deployed App
        </a>
      </div>
      <div className="card">
        <h3 class="projectTitle">Sample Project</h3>
        <img
          src="./src/assets/P1-Screenshot.png"
          alt="screenshot of Pokemon website"
          class="projectPic"
        />
        <span class="spacer"></span>
        <a class="projectLink" href="#">
          GitHub
        </a>
        <span>|</span>
        <a class="projectLink" href="#">
          Deployed App
        </a>
      </div>
      <div className="card">
        <h3 class="projectTitle">Sample Project</h3>
        <img
          src="./src/assets/P1-Screenshot.png"
          alt="screenshot of Pokemon website"
          class="projectPic"
        />
        <span class="spacer"></span>
        <a class="projectLink" href="#">
          GitHub
        </a>
        <span>|</span>
        <a class="projectLink" href="#">
          Deployed App
        </a>
      </div>
      <div className="card">
        <h3 class="projectTitle">Sample Project</h3>
        <img
          src="./src/assets/P1-Screenshot.png"
          alt="screenshot of Pokemon website"
          class="projectPic"
        />
        <span class="spacer"></span>
        <a class="projectLink" href="#">
          GitHub
        </a>
        <span>|</span>
        <a class="projectLink" href="#">
          Deployed App
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
