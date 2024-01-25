import "../styles/Header.css";

function Header() {
    return (
        <header>
            <h1>Madison Chazo</h1>
            <ul id="navTabs">
                <li id="aboutLink"><a href="/About">About Me</a></li>
                <li id="portLink"><a href="/Portfolio">Portfolio</a></li>
                <li id="contactLink"><a href="/Contact">Contact</a></li>
                <li id="resumeLink"><a href="/Resume">Resume</a></li>
            </ul>
        </header>
    )
}

export default Header;