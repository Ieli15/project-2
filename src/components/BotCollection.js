import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
import "../styles.css";  // Go up two levels to src/

const BotCollection = ({ enlistBot, showBotSpecs }) => {
  const [bots, setBots] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // Apply sorting
  const sortedBots = [...bots].sort((a, b) => (b[sortOption] || 0) - (a[sortOption] || 0));

  // Apply filtering
  const filteredBots = selectedClasses.length
    ? sortedBots.filter((bot) => selectedClasses.includes(bot.bot_class))
    : sortedBots;

  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <SortBar setSortOption={setSortOption} />
      <FilterBar selectedClasses={selectedClasses} setSelectedClasses={setSelectedClasses} />
      <div className="bot-list">
        {filteredBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} showBotSpecs={showBotSpecs} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
