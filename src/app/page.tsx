const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-white p-8 text-gray-800">
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-wide">Alpha Insights</h1>
        <p className="text-xl mt-4 text-gray-600">
          Elevating Academic Excellence, Empowering Your Success
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 my-16">
        {/* Research & Development */}
        <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-16 h-16 mb-6 text-blue-700"
          >
            <path
              fill="currentColor"
              d="M12 2L2 7h4v7h8V7h4L12 2z"
            />
          </svg>
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Research & Development</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Topic Selection</li>
            <li>Proposal Writing</li>
            <li>Data Analysis</li>
            <li>Literature Review</li>
          </ul>
        </div>

        {/* Academic Writing */}
        <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-16 h-16 mb-6 text-blue-700"
          >
            <path
              fill="currentColor"
              d="M21 2H3c-1.1 0-1.99.9-1.99 2L1 20c0 1.1.89 2 1.99 2H21c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM19 18H5V6h14v12z"
            />
          </svg>
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Academic Writing</h2>
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

        {/* Publishing Assistance */}
        <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-16 h-16 mb-6 text-blue-700"
          >
            <path
              fill="currentColor"
              d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM12 15l-4-4h3V9h2v2h3l-4 4z"
            />
          </svg>
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Publishing Assistance</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Manuscript Preparation</li>
            <li>Journal Selection</li>
            <li>Submission Assistance</li>
            <li>Editing and Proofreading</li>
          </ul>
        </div>
      </section>

      {/* Poster Image */}
      <div className="flex justify-center mt-16">
        <img
          src="/assets/poster.png"
          alt="Alpha Insights Poster"
          className="rounded-xl shadow-xl w-300 max-w-100 border border-blue-200"
        />
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 py-8 border-t border-blue-200">
        <h3 className="text-xl font-semibold mb-4">Get in Touch with Us</h3>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-blue-700"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
            />
          </svg>
          <a
            href="mailto:insightsalpha03@gmail.com"
            className="text-blue-600 hover:underline text-lg"
          >
            insightsalpha03@gmail.com
          </a>
        </div>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          Contact Us
        </button>
      </footer>
    </div>
  );
};

export default Home;


