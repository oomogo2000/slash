
const { token } = require('../config.json');
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const funtions = fs.readdirSync('../src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('../src/events').filter(file => file.endsWith('.js'));
const commandsFolders = fs.readdirSync('../src/commands')

(async() => {
	for (file of funtions) {
		require(`../functions/${file}`)(client);
	}
	client.handleEvents = (eventFiles, ".src/events");
	client.handleCommands = (commandsFolders, ".src/commands");
 	client.login(token);
})();