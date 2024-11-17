"use client";

import React from "react";

// List of 10 motivational quotes
const quotes = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    content:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    content: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  {
    content: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    content:
      "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    content: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
];

export default function CallToAction() {
  // Get the current date
  const currentDate = new Date();
  const dayOfYear = currentDate.getDate(); // Get the current day of the year

  // Calculate the index of the quote to display based on the current day
  const quoteIndex = dayOfYear % quotes.length; // Loop through quotes array

  // Get the quote of the day
  const { content, author } = quotes[quoteIndex];

  return (
    <div className="p-6 w-full h-auto max-w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center">
        "{content}"
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 text-center uppercase">
        - {author}
      </p>
    </div>
  );
}
