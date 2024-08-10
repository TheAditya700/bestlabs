import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the TA Labs</h1>
        <p className="text-lg mb-6">Explore the labs and learn more about each experiment</p>
        <a href="#labs" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300">View Labs</a>
      </div>
    </section>
  );
}

export default Hero;
