import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-end bg-cover bg-center bg-no-repeat transition-colors duration-300 font-sans"
      style={{
        backgroundImage:
          "url('/lady_online.jpg')", // Replace with your preferred image or a more suitable one
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
          {/* <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight w-full">vybara</h1> */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-md w-full">
          The dating app where vibe matters more than location
          </p>
        </div>
        <form className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors w-full sm:w-auto"
          >
            Join the waitlist
          </button>
        </form>
      </section>
    </div>
  );
}
