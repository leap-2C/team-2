"use client";

import { useState } from "react";

interface Message {
  name: string;
  message: string;
  amount: number;
}

interface SupportFormProps {
  onSupport: (newMessage: Message) => void;
}

export default function SupportForm({ onSupport }: SupportFormProps) {
  const [amount, setAmount] = useState(1);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) return alert("Please enter your name!");

    const newMessage = {
      name,
      message,
      amount,
    };

    onSupport(newMessage);
    setName("");
    setMessage("");
    setAmount(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message (optional)</label>
        <textarea
          className="w-full p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Number of coffees</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={amount}
          min={1}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </div>

      <button
        type="submit"
        className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
      >
        ☕ Buy {amount} coffee{amount > 1 ? "s" : ""}
      </button>
    </form>
  );
}
