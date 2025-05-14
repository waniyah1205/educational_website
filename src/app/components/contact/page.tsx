import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Alpha Insights</title>
      </Head>

      <section className="bg-white text-gray-800 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              Empowering Success Across Education, Business, and Beyond
            </p>
          </div>

          {/* Contact Info + Map */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-blue-800">Our Office</h2>
                <p className="text-gray-700">Karachi, Pakistan</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-800">Email</h2>
                <a
                  href="mailto:insightsalpha0@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  insightsalpha0@gmail.com
                </a>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-800">Contact Number</h2>
                <a
                  className="text-blue-600 hover:underline"
                >
                  03212155593
                </a>
              </div>
              <div>
                <iframe
                  title="Google Map"
                  className="w-full h-64 rounded shadow"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144362.75731208243!2d66.91501350818782!3d24.860734284836577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712565017896!5m2!1sen!2s"
                  style={{ border: 0 }}
                />
                  allowFullScreen
              </div>
            </div>

            {/* Feedback Form */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

