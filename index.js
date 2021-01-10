const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello there!'));

app.listen(port, () => console.log(`TimeZoneBot listening at http://localhost:${port}`));

// ================= START BOT CODE ===================

const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const client = new Client();
const prefix = '!';



client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'listtimezone') {
	const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

	message.channel.send(file);
}


  // ...
});

client.login('--token--');
