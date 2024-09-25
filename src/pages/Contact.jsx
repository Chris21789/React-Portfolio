import './Contact.css';

export default function Contact() {
  return (
    <div id='Contact'>
      <h1>Contact Me</h1>
      <form>
        <label>Name</label>
        <input type='text' id='name'/>        
        <label>Email Address</label>
        <input type='text' id='email'/>
        <label>Message</label>
        <textarea id='message' rows='7'/>
        <div id='msg'></div>
        <button id='formBtn' type='submit'>Send</button>
      </form>
    </div>
  );
}
