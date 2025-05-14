import React from "react";

const Services = () => {
  return (
    <div className="bg-blue-50 text-gray-800">
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 border-b-4 border-blue-700 inline-block pb-2">
          Our Comprehensive Services
        </h2>

        <div className="space-y-14">
          {/* Academic Writing */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
              Academic Writing Support
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Thorough research papers with original content.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Well-structured theses and dissertations adhering to academic guidelines.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Professional journal articles with clarity and precision.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Tailored academic projects and essays.
              </li>
            </ul>
          </div>

          {/* Research Development */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
              Research Development
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Expert guidance on topic selection.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Compelling proposal writing for funding and project approval.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Data analysis using advanced tools.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Thorough literature reviews establishing a solid theoretical base.
              </li>
            </ul>
          </div>

          {/* Publishing Assistance */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
              Publishing Assistance
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Manuscript structuring and editing for professional quality.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Guidance in selecting the right journals.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Comprehensive support through submission and revisions.
              </li>
              <li className="bg-blue-100 rounded-lg px-4 py-2">
                Editing and proofreading for clarity and error-free content.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center rounded-t-3xl shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Let’s Achieve Your Academic Goals Together</h2>
          <p className="text-lg mb-6 leading-relaxed">
            At AlphaInsights, we understand the challenges of academic and research pursuits. Let us help you transform your ideas into impactful content that stands out in a competitive world.
          </p>
          <p className="text-lg font-medium">
            Partner with us to achieve your academic and professional milestones with confidence.
          </p>
          <a
            href="mailto:insightsalpha0@gmail.com"
            className="mt-6 inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
          >
            Connect with Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
