import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-32 text-center">
        <img
          src="/profile.jpg"
          alt="Gokul Kumar"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Gokul Kumar
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;