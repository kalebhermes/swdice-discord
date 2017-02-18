#!/usr/bin/env node
"use strict";

var Discord = require("discord.js");
var staticValues = require("./staticValues.js");
var DiceRoller = require("./diceRoller.js");
var ValueParser = require('./valueParser.js');
var client = new Discord.Client();

client.on("message", msg => {

  let finalRegex = new RegExp(/(\d+[d]\d*[+]?\d+)|(\d+[gybprkf])/g);
  var rollRegex = new RegExp(/(\/r(oll)?)/g);

  if (msg.content.startsWith('Get Server ID')){
    msg.channel.sendMessage(msg.guild.id);
  };

  if (msg.author.bot){return;};

  if (msg.content.search(rollRegex) == -1 || msg.content.search(finalRegex) == -1 || msg.author.bot){
    msg.channel.sendMessage(msg.author + staticValues.improperSyntax);
    return;
  } else {
    let incomingRolls = msg.content.match(finalRegex);
    let message = msg.author + ' rolled ';
    let total = 0;
    let values = [];
    let spacer = '   ';

    for(let die in incomingRolls){
      if(incomingRolls[die].indexOf('d') != -1){
        let temp = DiceRoller.rollTraditionalDice(incomingRolls[die], msg.guild.id);
        message += temp.message + spacer;
        total += temp.total;
      } else {
        let temp = DiceRoller.rollStarWarsDice(incomingRolls[die], msg.guild.id);
        message += temp.message + spacer;
        values = values.concat(temp.value);
      }
    }

    let parsedValue = ValueParser.parse(values, msg.guild.id);

    message += '\nfor a net\n' + parsedValue;
    if(total > 0){message += staticValues.symbols[msg.guild.id]['d20'] + total;};
    
    if(message.length > 2000){
      message = ValueParser.splitString(message);
      msg.channel.sendMessage(message[0]);
      msg.channel.sendMessage(message[1]);
    } else {
      msg.channel.sendMessage(message);
    }

    return;
  }

});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(staticValues.botToken);