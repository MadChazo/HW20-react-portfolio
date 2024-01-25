import "../styles/Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p>Note: This form does not currently save/send information.</p>
      <form id="contactForm">
        <label>
          Name:
          <input type="text" name="name" id="nameInput" />
        </label>
        <label>
          Email:
          <input type="email" name="email" id="emailInput" />
        </label>
        <label>
          Message:
          <input type="text" name="message" id="messageInput" />
        </label>
        <input type="submit" value="Submit" id="submitBtn" />
      </form>
    </div>
  );
}

export default Contact;
