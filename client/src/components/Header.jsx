import "../styles/Header.css";

function Header() {
    return (
        <header>
            <h1>Madison Chazo</h1>
            <ul id="navTabs">
                <li id="aboutLink">About Me</li>
                <li id="portLink">Portfolio</li>
                <li id="contactLink">Contact</li>
                <li id="resumeLink">Resume</li>
            </ul>
        </header>
    )
}

export default Header;