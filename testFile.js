var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", msg => {

	let prefix = "/";
	let dieType = {
		'y':12,
		'g':8,
		'b':6,
		'r':12,
		'p':8,
		'k':6,
		'f':12
	}

	let diceArray = {
	  'g': {
              1: 'Blank',
              2: 'Success',
              3: 'Success',
              4: 'Success Success', 
              5: 'Advantage',
              6: 'Advantage',
              7: 'Advantage Success',
              8: 'Advantage Advantage'},
	  'y': {
              1: 'Blank',
              2: 'Success',
              3: 'Success Success',
              4: 'Success Success',
              5: 'Advantage',
              6: 'Advantage Success',
              7: 'Advantage Success',
              8: 'Advantage Success',
              9: 'Advantage Advantage',
              10: 'Advantage Advantage',
              11: 'Advantage Advantage',
              12: 'Triumph'},
	  'b': {
              1: 'Blank',
              2: 'Blank',
              3: 'Success',
              4: 'Advantage Success',
              5: 'Advantage',
              6: 'Advantage Advantage'
              },
	  'p': {
              1: 'Blank',
              2: 'Failure',
              3: 'Failure Failure',
              4: 'Threat', 
              5: 'Threat',
              6: 'Threat',
              7: 'Threat Threat',
              8: 'Threat Failure'},
	  'r': {
              1: 'Blank',
              2: 'Failure',
              3: 'Failure',
              4: 'Failure Failure',
              5: 'Failure Failure',
              6: 'Threat',
              7: 'Threat',
              8: 'Threat Failure',
              9: 'Threat Failure',
              10: 'Threat Threat',
              11: 'Threat Threat',
              12: 'Despair'},
	  'b': {
              1: 'Blank',
              2: 'Blank',
              3: 'Failure',
              4: 'Failure',
              5: 'Threat',
              6: 'Threat'
              },
	  'f': {
            1: 'Black',
            2: 'Black',
            3: 'Black',
            4: 'Black',
            5: 'Black',
            6: 'Black',
            7: 'Black Black',
            8: 'White',
            9: 'White',
            10: 'White White',
            11: 'White White',
            12: 'White White'
            }
	}

	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	if (msg.content.startsWith(prefix + "roll")){
    	var temp = msg.content.replace('/roll ','');
		var dice = temp.split(' ');

    	for (x=0;x<dice.length;x++){
    		var thisDieType = dice[x].slice(-1);
    		numSides = dieType[thisDieType];
    		numDice = dice[x].substring(0, dice[x].length - 1);

    		var newArray = [];

    		for(y=0;y<numDice;y++){
    			var dieRoll = Math.floor((Math.random() * numSides) + 1);
    			var emoji = ':';
    			emoji += diceArray[thisDieType][dieRoll] + ':';
    			newArray.push(emoji);
    		}

    		var printString = '';

    		for(z=0;z<newArray.length;z++){
    			printString += newArray[x] + ' ';
    		}

    		msg.channel.sendMessage(numDice + ' ' + numSides + ' ' + printString);
    	}
    }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login("");