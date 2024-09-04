"use client";

import {
  Card,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    setResponse(data.message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Card color="transparent" shadow={false} className="flex justify-center items-center min-h-screen">
      <form
        className="mt-16 mb-2 w-full max-w-sm sm:max-w-sm md:w-[350px] lg:w-[400px] p-4 lg:p-8 rounded-lg bg-white"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm lg:text-base font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            autoComplete="name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            autoComplete="email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            autoComplete="off"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-800 w-full  text-[10px] lg:text-sm"
          >
            Send Message
          </Button>
        </div>
      </form>
      {response && (
        <div className="flex justify-center mt-4">
          <p className="text-sm lg:text-base text-gray-700">{response}</p>
        </div>
      )}
    </Card>
  );
}
