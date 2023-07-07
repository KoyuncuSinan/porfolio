import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
        setSent(true);
      } catch (error) {
        setError('An error occurred. Please try again later.');
      }
    };
  
    return (
      <div className="text-center text-black mt-24">
        <h2 className="font-bold text-4xl" id="contact">CONTACT</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <p className="mt-4">Feel free to reach out to me by filling out the form below, and I will respond to you as soon as I can.</p>
        {sent ? (
          <p className="mt-4">Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="p-10 bg-gray-200 mt-4 rounded-md flex flex-col">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-left">Name</label>
              <input
                type="text"
                id="name"
                className="px-2 rounded-md h-[3rem]"
                value={name}
                placeholder="Enter your name"
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="flex flex-col mb-4"> 
              <label htmlFor="email" className="text-left ">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="px-2 rounded-md h-[3rem]"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-left ">Message</label>
              <textarea
                id="message"
                value={message}
                placeholder="Enter your message"
                className="px-2 rounded-md h-[6rem] pt-2"
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white">Send Message</button>
            {error && <p>{error}</p>}
          </form>
        )}
      </div>
    );
  };
  
  export default ContactForm;