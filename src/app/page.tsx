'use client';

import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-white p-8 text-gray-800">
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-wide">AlphaInsights</h1>
        <p className="text-xl mt-4 text-gray-600">
          Elevating Academic Excellence, Empowering Your Success
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 my-16">
        {/* Research & Development */}
        <Link href="/components/services">
          <div className="bg-white shadow-xl rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="/assets/research.png.jpeg"
              alt="Research & Development"
              className="rounded-xl mb-4 w-full h-50 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Research & Development</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Topic Selection</li>
              <li>Proposal Writing</li>
              <li>Data Analysis</li>
              <li>Literature Review</li>
            </ul>
          </div>
        </Link>

        {/* Academic Writing */}
        <Link href="/components/services">
          <div className="bg-white shadow-xl rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="/assets/writing.png.jpeg"
              alt="Academic Writing"
              className="rounded-xl mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Academic Writing</h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Research Papers
                <ul className="list-inside list-decimal text-sm text-gray-600 ml-4">
                  <li>Original Article</li>
                  <li>Systematic Review</li>
                  <li>Short Review</li>
                  <li>Meta-Analysis</li>
                </ul>
              </li>
              <li>Theses and Dissertations</li>
              <li>Journal Articles / Manuscripts</li>
              <li>Academic Projects</li>
            </ul>
          </div>
        </Link>

        {/* Publishing Assistance */}
        <Link href="/components/services">
  <div className="bg-white shadow-xl rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <div className="flex justify-center">
      <img
        src="/assets/publishing.jpeg"
        alt="Publishing Assistance"
        className="rounded-xl mb-5 w-60 h-50 object-cover"
      />
    </div>
    <h2 className="text-2xl font-semibold mb-4 text-blue-800 text-center">
      Publishing Assistance
    </h2>
    <ul className="list-disc list-inside text-sm text-gray-700">
      <li>Manuscript Preparation</li>
      <li>Journal Selection</li>
      <li>Submission Assistance</li>
      <li>Editing and Proofreading</li>
    </ul>
  </div>
     </Link>
      </section>

      {/* Poster Image */}
      <div className="flex justify-center mt-16">
        <img
          src="/assets/poster.png.jpeg"
          alt="Alpha Insights Poster"
          className="rounded-xl shadow-xl w-[300px] max-w-full border border-blue-200"
        />
      </div>
    </div>
  );
};

export default Home;

