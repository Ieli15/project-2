import React from "react";

const FilterBar = ({ selectedClasses, setSelectedClasses }) => {
  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const toggleClass = (botClass) => {
    if (selectedClasses.includes(botClass)) {
      setSelectedClasses(selectedClasses.filter((cls) => cls !== botClass));
    } else {
      setSelectedClasses([...selectedClasses, botClass]);
    }
  };

  return (
    <div className="filter-bar">
      <h3>Filter by Class:</h3>
      {botClasses.map((botClass) => (
        <label key={botClass}>
          <input
            type="checkbox"
            value={botClass}
            checked={selectedClasses.includes(botClass)}
            onChange={() => toggleClass(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
