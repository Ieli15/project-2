# Bot Battlr 🚀

## Overview
Bot Battlris the go to robot army-building experience in the galaxy! It is powered by React and  lets users browse bots, enlist them into their army and strategically manage their robotic squad.

## Tech used
React – Frontend framework
JSON Server – Backend for simulating a database
CSS – Styling

## Project Setup
1️⃣ Clone the Repository
bash
code : 'git clone https://github.com/YOUR_GITHUB_USERNAME/Bot-Battlr.git'
then 'cd Bot-Battlr'
2️⃣ Install Dependencies
code: npm install
3️⃣ Start the JSON Server
Ensure you have json-server installed globally: code : 'npm install -g json-server'
Run the server: json-server: '--watch db.json --port 8001'
Verify it’s running by visiting: http://localhost:8001/bots

4️⃣ Start the React App
code: npm start
## UI Design
The application has the following components:

1. BotCollection.js – Displays all available bots.
2. YourBotArmy.js – Shows enlisted bots.
3. BotCard.js – Renders each bot's details.
4. BotSpecs.js – Shows bot details before enlisting.
5. SortBar.js – Provides sorting/filtering options.