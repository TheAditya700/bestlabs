import React, { useEffect, useState, Suspense } from 'react';

function LabDetail({ lab, unit, onBack }) {
  const [Theory, setTheory] = useState(null);
  const [CodePane, setCodePane] = useState(null);
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  useEffect(() => {
    // Dynamically import the Theory component
    import(`../data/lab${lab.id}/theory.jsx`)
      .then(module => setTheory(() => module.default))
      .catch(err => console.error('Failed to load theory content', err));

    // Dynamically import the CodePane component
    import(`../data/lab${lab.id}/codepane.js`)
      .then(module => setCodePane(() => module.default))
      .catch(err => console.error('Failed to load code pane component', err));
  }, [lab]);

  const handleLinkClick = (snippet) => {
    setSelectedSnippet(snippet);
  };

  return (
    <div className="container mx-auto py-20">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">{lab.name}</h1>
        <p className="text-lg text-gray-600 mb-4">Part of: {unit.name}</p>
        <button 
          onClick={onBack} 
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
        >
          Back to Labs
        </button>
      </div>

      {/* Two-Pane Layout */}
      <div className="flex space-x-8">
        {/* Theory Pane */}
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Theory</h2>
          <div className="text-gray-700 scroll-pane">
            <Suspense fallback={<div>Loading theory...</div>}>
              {Theory ? <Theory onLinkClick={handleLinkClick} /> : <div>Loading theory content...</div>}
            </Suspense>
          </div>
        </div>

        {/* Code Pane */}
        <div className="w-1/2 bg-gray p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Code</h2>
          <div className="text-gray-700 scroll-pane">
          <Suspense fallback={<div>Loading code pane...</div>}>
            {CodePane ? <CodePane selectedSnippet={selectedSnippet} /> : <div>Loading code pane component...</div>}
          </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabDetail;
