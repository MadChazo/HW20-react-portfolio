function Header() {
  return (
    <header>
      <h1>Madison Chazo</h1>
      <ul id="navTabs">
        <li>
          <a id="aboutLink" href="/About">
            About Me
          </a>
        </li>
        <li>
          <a id="portLink" href="/Portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a id="contactLink" href="/Contact">
            Contact
          </a>
        </li>
        <li>
          <a id="resumeLink" href="/Resume">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
