import React from 'react';

function LabList({ labs, onSelectLab }) {
  if (!labs.length) {
    return <p className="text-center text-gray-500">No labs available for the selected unit.</p>;
  }

  return (
    <section id="labs" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Available Labs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labs.map(lab => (
          <div key={lab.id} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">{lab.name}</h3>
            <p className="text-gray-600 mb-4">{lab.description}</p>
            <button 
              onClick={() => onSelectLab(lab.id)} 
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LabList;
