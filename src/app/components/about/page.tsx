import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">About Alpha Insights</h1>
          <p className="mt-4 text-lg text-gray-600">
            Elevating Academic Excellence, Empowering Your Success
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Alpha Insights, we are committed to fostering academic excellence through customized research, 
            writing, and publishing solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our services are crafted to empower students, researchers, and institutions in achieving scholarly success.
            Welcome to AlphaInsights, your trusted partner in academic and research writing excellence. We are dedicated 
            to empowering students, scholars, and professionals by providing unparalleled support in academic writing, 
            research development, and publishing.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our team of experienced writers and subject matter experts is committed to delivering high-quality, 
            meticulously crafted content tailored to meet your unique needs. Whether you require assistance with research 
            papers, theses, dissertations, journal publications, or other academic projects, we ensure precision, 
            originality, and adherence to the highest academic standards.
          </p>
        </div>

             {/* Why Choose AlphaInsights? */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 border-b-4 border-blue-700 inline-block pb-2">
          Why Choose AlphaInsights?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
            <strong className="text-blue-800">Expertise You Can Trust:</strong> Work with seasoned professionals with extensive experience.
          </div>
          <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
            <strong className="text-blue-800">Time Efficiency:</strong> Save time with our streamlined processes and timely delivery.
          </div>
          <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
            <strong className="text-blue-800">Cost-Effective Solutions:</strong> Get quality service at competitive prices.
          </div>
          <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
            <strong className="text-blue-800">Dedicated Support:</strong> Enjoy personalized attention from a dedicated project manager.
          </div>
          <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
            <strong className="text-blue-800">Quality Assurance:</strong> Multi-layered quality check ensures academic perfection.
          </div>
          <div className="bg-blue-100 rounded-xl p-4 shadow-sm">
            <strong className="text-blue-800">Global Reach:</strong> Benefit from our experience serving clients worldwide.
          </div>
        </div>
      </section>

        {/* Perks & Advantages */}
        <div className="bg-blue-50 rounded-xl p-8 shadow-md mb-16">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Perks and Advantages of Partnering with AlphaInsights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At AlphaInsights, we understand the complexities of academic and research pursuits. Our mission is to help you 
            achieve your milestones with confidence and excellence. When you choose AlphaInsights, you gain access to benefits 
            designed to elevate your academic journey.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Collaborate with a trusted team that prioritizes your success.</li>
            <li>Get personalized attention from a dedicated project manager.</li>
            <li>Experience a multi-layered quality check process that ensures perfection in every deliverable.</li>
            <li>Achieve academic impact through content that is insightful, original, and well-crafted.</li>
            <li>Join a global network of clients who rely on AlphaInsights for excellence and reliability.</li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg">Got questions or need assistance?</p>
          <a
            href="mailto:insightsalpha0@gmail.com"
            className="mt-4 inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
