'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-end bg-cover bg-center bg-no-repeat transition-colors duration-300 font-sans"
      style={{
        backgroundImage: "url('/lady_online.jpg')",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 400,
      }}
    >
      <section className="w-full max-w-xl px-8 py-16 rounded-lg shadow-lg bg-white/90 dark:bg-gray-900/90 flex flex-col items-center gap-10 mr-0 sm:mr-16 md:mr-24 lg:mr-32 xl:mr-40 ml-auto">
        <div className="flex flex-row items-center gap-4 w-full">
          <Image
            src="/logoName.png"
            alt="Vybara logo"
            width={256}
            height={256}
            className="mb-2"
            priority
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-md w-full">
            The dating app where vibe matters more than location
          </p>
        </div>

        {submitted ? (
          <p className="text-green-600 dark:text-green-400 text-center font-semibold">
            You're on the list ✨
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors w-full sm:w-auto"
            >
              Join the waitlist
            </button>
          </form>
        )}

        {error && (
          <p className="text-red-600 dark:text-red-400 text-center mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </section>
    </div>
  );
}