#!/usr/bin/env node
"use strict";

var Discord = require("discord.js");
var staticValues = require("./staticValues.js");
var DiceRoller = require("./diceRoller.js");
var ValueParser = require('./valueParser.js');
var client = new Discord.Client();

const dropEnum = {
  LOWEST: 'l',
  HIGHEST: 'h',
};

client.on("message", msg => {

  let finalRegex = new RegExp(/(\d+[d]\d* *[+]? *\d+( *\!d[lh])*)|(\d+[gybprkf])/g);
  var rollRegex = new RegExp(/(\/r(oll)?)/g);
  var urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

  if (msg.content.startsWith('Get Server ID')){
    msg.channel.sendMessage(msg.guild.id);
  };

  if (msg.author.bot){return;};

  if (msg.content.search(urlRegex) != -1){
    return;
  } else if (msg.content.search(rollRegex) == -1){
    return;
  } else if (msg.content.search(rollRegex) != -1 && msg.content.search(finalRegex) == -1){
    msg.channel.sendMessage(msg.author + staticValues.improperSyntax);
    return;
  } else if (msg.content.search(rollRegex) != -1 && msg.content.search(finalRegex) != -1){
    let incomingRolls = msg.content.match(finalRegex);
    let message = msg.author + ' rolled ';
    let total = 0;
    let values = [];
    let spacer = '   ';
    let drop = false;
    let dropState;

    for(let die of incomingRolls){
      if(die.includes('!')){
        drop = true;
        if(die.includes('h')) dropState = dropEnum.HIGHEST;
        else if(die.includes('l')) dropState = dropEnum.LOWEST;

        die = die.replace('!dl', '').replace('!dh').trim();
      } 
    }

    for(let die in incomingRolls){
      if(incomingRolls[die].indexOf('d') != -1){

        if(incomingRolls[die].includes('!')){
          drop = true;
          if(incomingRolls[die].includes('h')) dropState = dropEnum.HIGHEST;
          else if(incomingRolls[die].includes('l')) dropState = dropEnum.LOWEST;

          incomingRolls[die] = incomingRolls[die].replace('!dl', '').replace('!dh', '').trim();
        }

        let temp = DiceRoller.rollTraditionalDice(incomingRolls[die], dropState, msg.guild.id);
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