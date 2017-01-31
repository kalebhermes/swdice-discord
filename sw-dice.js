var Discord = require("discord.js");
var staticValues = require("./staticValues.js");
var client = new Discord.Client();

client.on("message", msg => {

	let prefix = "/";
  let rollConstraints = new RegExp(/^(\/ro?l?l? ([0-9][ygbprkf][ ]*)+)$/g);
  let dieConstraints = new RegExp(/(\d+[ygbprkf])/g);

	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (msg.content.search(rollConstraints) == -1){
    msg.channel.sendMessage(msg.author + ' That\'s not a valid command. Please use only 1 - 9 and g y b p r k f. \nEx: \'/roll 1y 2g 3p\'');
    return;
  }

	if (msg.content.startsWith(prefix + "roll") || msg.content.startsWith(prefix + 'r')){
    //Trim out the /roll command and split each die type and number of die to roll into an array

    var incomingRollCommand = msg.content.replace('/roll ', '').replace('/r ', '');

    var requestedRolls = incomingRollCommand.match(dieConstraints);

    var symbolPool = [];
    var rolledDiePool = [];

      //itterate on that array
      // this whole thing needs to be rewirtten. 
    	for (var x=0;x<requestedRolls.length;x++){
        //thisDieType = y,g,b,p,r,k or f
    		var thisDieType = requestedRolls[x].slice(-1);
    		numSides = staticValues.diceArray[thisDieType].sides;
    		numDice = requestedRolls[x].substring(0, requestedRolls[x].length - 1);

    		for(var y=0;y<numDice;y++){
    			var numberRolledOnDie = Math.floor((Math.random() * numSides) + 1);
          var dieValue = staticValues.diceArray[thisDieType].faces[numberRolledOnDie];
          var thisDieText = staticValues.diceArray[thisDieType].emoji;
          var splitDieValue = dieValue.split(' ');
          for(var xx=0;xx<splitDieValue.length;xx++){
            symbolPool.push(splitDieValue[xx]);
            thisDieText += staticValues.symbols[splitDieValue[xx]];
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
            printString += staticValues.symbols[key];
          }
        }
      }

      if (printString.length < 2000){
        msg.channel.sendMessage(msg.author + ' rolled ' + printString);
      }
      else{

        //handle this a little different than what's below. Check before concat'ing print strings so see if the total would be more than 2000. If yes, print the dice, then the 'for a net' then the pool. 

        // printString1 = first half of print string
        // printString2 = second half of print string
        // msg.channel.sendMessage(msg.author + ' rolled ' + printString1);
        // msg.channel.sendMessage(printString2);
      }

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

function handleInput(roll){
  
}

client.login(staticValues.botToken);