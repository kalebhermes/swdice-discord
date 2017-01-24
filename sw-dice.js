var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", msg => {

	let prefix = "/";
  let expression = new RegExp(/^(\/roll ([0-9][ygbprkf][ ]*)+)$/g);


  let symbols = {
    'Success': '<:Success:273177002176151552>',
    'Advantage': '<:Advantage:273176960568393728>',
    'Failure': '<:Failure:273176991790792715>',
    'Threat': '<:Threat:273177009943740426>',
    'Triumph': '<:Triumph:273177018013581313>',
    'Despair': '<:Despair:273176982274179073>',
    'Black': '<:Darkside:273266259003441163>',
    'White': '<:Lightside:273266185540206593>',
    'Blank': '',
  }

	let diceArray = {
	  'g': {
      'sides':8,
      'emoji':'<:abilitybg:273177167590850562>',
      'faces':{
        1: 'Blank',
        2: 'Success',
        3: 'Success',
        4: 'Success Success', 
        5: 'Advantage',
        6: 'Advantage',
        7: 'Advantage Success',
        8: 'Advantage Advantage'}
    },
	  'y': {
      'sides':12,
      'emoji':'<:proficiencybg:273177225820635137>',
      'faces':{
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
        12: 'Triumph'}
    },
	  'b': {
      'sides':6,
      'emoji':'<:boostbg:273177190039027714>',
      'faces':{
        1: 'Blank',
        2: 'Blank',
        3: 'Success',
        4: 'Advantage Success',
        5: 'Advantage',
        6: 'Advantage Advantage'
        }
    },
	  'p': {
      'sides':8,
      'emoji':'<:difficultybg:273177208749686784>',
      'faces':{
        1: 'Blank',
        2: 'Failure',
        3: 'Failure Failure',
        4: 'Threat', 
        5: 'Threat',
        6: 'Threat',
        7: 'Threat Threat',
        8: 'Threat Failure'}
    },
	  'r': {
      'sides':12,
      'emoji':'<:challengebg:273177199224291329>',
      'faces':{
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
        12: 'Despair'}
      },
	  'k': {
      'sides':6,
      'emoji':'<:setbackbg:273177234783600644>',
      'faces':{
        1: 'Blank',
        2: 'Blank',
        3: 'Failure',
        4: 'Failure',
        5: 'Threat',
        6: 'Threat'
        }
      },
	  'f': {
      'sides':12,
      'emoji':'<:forcebg:273177217067122695>',
      'faces':{
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
	};

	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (msg.content.search(expression) == -1){
    msg.channel.sendMessage(msg.author + ' That\'s not a valid command. Please use only 1 - 9 and g y b p r k f. \nEx: \'/roll 1y 2g 3p\'');
    return;
  }

	if (msg.content.startsWith(prefix + "roll")){
    //Trim out the /roll command and split each die type and count into an array
    var temp = msg.content.replace('/roll ','');
		var requestedRolls = temp.split(' ');

    var symbolPool = [];
    var rolledDiePool = [];

      //itterate on that array
    	for (var x=0;x<requestedRolls.length;x++){
        //thisDieType = y,g,b,p,r,k or f
    		var thisDieType = requestedRolls[x].slice(-1);
    		numSides = diceArray[thisDieType].sides;
    		numDice = requestedRolls[x].substring(0, requestedRolls[x].length - 1);
        // console.log(numDice);

    		for(var y=0;y<numDice;y++){
    			var numberRolledOnDie = Math.floor((Math.random() * numSides) + 1);
          var dieValue = diceArray[thisDieType].faces[numberRolledOnDie];
          var thisDieText = diceArray[thisDieType].emoji;
          var splitDieValue = dieValue.split(' ');
          for(var xx=0;xx<splitDieValue.length;xx++){
            symbolPool.push(splitDieValue[xx]);
            thisDieText += symbols[splitDieValue[xx]];
          }
          rolledDiePool.push(thisDieText);
    		}

    		var printString = '';

    		for(var z=0;z<rolledDiePool.length;z++){
    			printString += rolledDiePool[z] + '   ';
    		}

    	}

      printString += '\nfor a net\n';

      var settledSymbols = settleSymbolPool(symbolPool);

      for(var key in settledSymbols){
        if(settledSymbols[key] != 0){
          for(var yy=0;yy<settledSymbols[key];yy++){
            printString += symbols[key];
          }
        }
      }

      msg.channel.sendMessage(msg.author + ' rolled ' + printString);

    }
});

client.on('ready', () => {
  console.log('I am ready!');
});

function settleSymbolPool(symbolPool){
  var numSuccess = 0;
  var numFailure = 0;
  var numAdvantage = 0;
  var numThreat = 0;
  var numTriumph = 0;
  var numDespair = 0;
  var numBlack = 0;
  var numWhite = 0;

  for(var x=0;x<symbolPool.length;x++){
    if(symbolPool[x] == 'Success'){
      numSuccess += 1;
    }
    else if(symbolPool[x] == 'Failure'){
      numFailure += 1;
    }
    else if(symbolPool[x] == 'Advantage'){
      numAdvantage += 1;
    }
    else if(symbolPool[x] == 'Threat'){
      numThreat += 1;
    }
    else if(symbolPool[x] == 'Triumph'){
      numTriumph += 1;
    }
    else if(symbolPool[x] == 'Despair'){
      numDespair += 1;
    }
    else if(symbolPool[x] == 'Black'){
      numBlack += 1;
    }
    else if(symbolPool[x] == 'White'){
      numWhite += 1;
    }
  }

  if(numSuccess > numFailure){
    numSuccess -= numFailure;
    numFailure = 0;
  }
  else if(numFailure > numSuccess){
    numFailure -= numSuccess;
    numSuccess = 0;
  }
  else{
    numSuccess = 0;
    numFailure = 0;
  }

  if(numAdvantage > numThreat){
    numAdvantage -= numThreat;
    numThreat = 0;
  }
  else if(numThreat > numAdvantage){
    numThreat -= numAdvantage;
    numAdvantage = 0;
  }
  else{
    numAdvantage = 0;
    numThreat = 0;
  }

  return {
    'Success': numSuccess,
    'Advantage': numAdvantage,
    'Triumph': numTriumph,
    'Failure': numFailure,
    'Threat': numThreat,
    'Despair': numDespair,
    'White': numWhite,
    'Black': numBlack
  };

}

client.login("");