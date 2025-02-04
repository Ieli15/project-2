import React from "react";

const BotSpecs = ({ bot, enlistBot, goBack }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default BotSpecs;
