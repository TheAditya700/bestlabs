import React from 'react';

function UnitSelector({ units, selectedUnit, onSelectUnit }) {
  return (
    <div className="container mx-auto mb-8">
      <div className="flex justify-center space-x-4">
        {units.map((unit, index) => (
          <button
            key={unit.id}
            className={`px-4 py-2 rounded border ${
              selectedUnit && selectedUnit.id === unit.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors duration-300`}
            onClick={() => onSelectUnit(unit.id)}
          >
            Unit {index + 1}
          </button>
        ))}
      </div>
      {selectedUnit && (
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-700">{selectedUnit.name}</p>
        </div>
      )}
    </div>
  );
}

export default UnitSelector;
