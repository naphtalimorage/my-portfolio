"use client"
import {
  Card,
  Input,
  Typography,
  Textarea,
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
    console.log(data);

    setResponse(data.message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Card color="transparent" shadow={false}>
      <form
        className="mt-20 mb-2 w-80 max-w-screen-lg sm:w-96 p-8 rounded-lg bg-white"
        onSubmit={handleSubmit}
        method="POST"
      >
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-800 p-2 rounded-lg w-80"
          autoComplete="name"
        /><br/>

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-800 p-2 rounded-lg w-80"
          autoComplete="email"
        /><br /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea
          id="message"
          name="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border border-gray-800 p-2 rounded-lg w-80"
          autoComplete="off"
        ></textarea><br /><br />

        <div className="flex justify-center">
          <Button type="submit" className="bg-purple-600 hover:bg-purple-800">
            Send Message
          </Button>
        </div>


      </form>
      {response && <p>{response}</p>}
    </Card>
  );
}