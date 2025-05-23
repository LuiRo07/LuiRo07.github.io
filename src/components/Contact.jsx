import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primaryBlue flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/bdryrdxb"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 mt-2 text-xl">
            // Let's get in touch1
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-4"
          type="text"
          placeholder="Name"
          name="name"
        />
        {/* hidden honeypot to prevent spams */}
        <input type="hidden" name="_gotcha" style={{ display:'none !important'}}/>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-4"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
