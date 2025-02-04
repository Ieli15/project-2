import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import "./styles.css";

const App = () => {
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    } else {
      alert(`You can only have one bot per class!`);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: "DELETE" })
      .then(() => setArmy(army.filter((b) => b.id !== botId)));
  };

  return (
    <Router>
      <div className="app">
        <YourBotArmy army={army} releaseBot={releaseBot} deleteBot={deleteBot} />
        {selectedBot ? (
          <BotSpecs bot={selectedBot} enlistBot={enlistBot} goBack={() => setSelectedBot(null)} />
        ) : (
          <BotCollection enlistBot={enlistBot} showBotSpecs={setSelectedBot} />
        )}
      </div>
    </Router>
  );
};

export default App;
