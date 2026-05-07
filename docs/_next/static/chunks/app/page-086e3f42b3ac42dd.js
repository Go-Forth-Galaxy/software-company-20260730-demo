"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Innovative Solutions</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition duration-300">Home</a>
            <a href="#about" className="hover:text-blue-200 transition duration-300">About Us</a>
            <a href="#services" className="hover:text-blue-200 transition duration-300">Services</a>
            <a href="#contact" className="hover:text-blue-200 transition duration-300">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-indigo-800 pb-4">
            <nav className="flex flex-col items-center space-y-2">
              <a href="#" className="block text-white hover:text-blue-200 transition duration-300 py-2">Home</a>
              <a href="#about" className="block text-white hover:text-blue-200 transition duration-300 py-2">About Us</a>
              <a href="#services" className="block text-white hover:text-blue-200 transition duration-300 py-2">Services</a>
              <a href="#contact" className="block text-white hover:text-blue-200 transition duration-300 py-2">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center shadow-inner">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold leading-tight mb-4">Leading the future of software development</h2>
          <p className="text-xl mb-8">Crafting innovative solutions for a digital world</p>
          <a href="#services" className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">About Us</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Innovative Solutions is a pioneering software company dedicated to crafting cutting-edge solutions that empower businesses and individuals. With a focus on user-centric design and robust engineering, we transform complex challenges into intuitive and powerful software experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of passionate experts is committed to delivering excellence and pushing the boundaries of what's possible in the digital realm. We believe in building lasting partnerships with our clients, ensuring their success is at the heart of everything we do.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="About Us" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Custom Software Development</h4>
              <p className="text-gray-600">Tailored software solutions designed to meet your unique business needs and objectives.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Cloud Solutions & Migrations</h4>
              <p className="text-gray-600">Seamless transition to cloud platforms and expert management of your cloud infrastructure.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development (iOS & Android)</h4>
              <p className="text-gray-600">Engaging and high-performance mobile applications for both iOS and Android platforms.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">AI & Machine Learning Integration</h4>
              <p className="text-gray-600">Leverage the power of AI and machine learning to drive innovation and efficiency.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Enterprise Software Solutions</h4>
              <p className="text-gray-600">Robust and scalable software designed to streamline your enterprise operations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Data Analytics & Visualization</h4>
              <p className="text-gray-600">Transform raw data into actionable insights with powerful analytics and interactive visualizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h3>
          <p className="text-gray-700 text-lg mb-8">
            Ready to innovate? Reach out to us at <a href="mailto:info@innovativesolutions.com" className="text-blue-600 hover:underline">info@innovativesolutions.com</a> or call us at <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>.
          </p>
          <form className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 ease-in-out">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2026 Innovative Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
