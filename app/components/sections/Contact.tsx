'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Full name:', fullname);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold pt-12 text-center">Contact Us</h1>
      <p className="text-center mt-2">Get in touch with Me</p>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullname" className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Full name"
            className="w-full border rounded-lg px-3 py-2 text-black"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-full border rounded-lg px-3 py-2 text-black"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full border rounded-lg px-3 py-2 text-black h-32 resize-none"
            id="message"
            placeholder="Type your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          className="bg-purple-800 p-3 mx-72 text-white rounded-full hover:bg-purple-950 w-28"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
