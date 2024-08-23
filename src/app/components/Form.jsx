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
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
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
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3" htmlFor="name">
            Your Name
            <Input
              id="name"
              size="lg"
              name="name"
              required
              placeholder="Enter your name..."
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              autoComplete="name"
            />
          </Typography>


          <Typography variant="h6" color="blue-gray" className="-mb-3" htmlFor="email">
            Your Email
            <Input
              id="email"
              size="lg"
              name="email"
              required
              placeholder="Enter your email..."
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              autoComplete="email"

            />
          </Typography>


          <Typography variant="h6" color="blue-gray" className="-mb-3" htmlFor="message">
            Message
            <Textarea
              id="message"
              name="message"
              size="lg"
              required
              placeholder="Enter your message..."
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              autoComplete="off"

            />
          </Typography>


          <Button type="submit" className="bg-purple-600 hover:bg-purple-800">
            Send Message
          </Button>
        </div>
        {response && <p>{response}</p>}
      </form>

    </Card>
  );
}