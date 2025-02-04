import React from "react";

const BotCard = ({ bot, enlistBot, releaseBot, deleteBot, showBotSpecs }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} onClick={() => showBotSpecs(bot)} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>

      {releaseBot && <button onClick={() => releaseBot(bot)}>Release</button>}
      {deleteBot && <button onClick={() => deleteBot(bot.id)}>❌</button>}
    </div>
  );
};

export default BotCard;
