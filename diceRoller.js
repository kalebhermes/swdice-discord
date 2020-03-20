var staticValues = require('./staticValues.js');

var DiceRoller = function(){};

//Consider pulling total, message and spacer out into the class itself. 

DiceRoller.prototype.rollTraditionalDice = function(command, drop, guildID){
	command = command.split('+');
	let total = 0;
	let message = '';
	let spacer = '   ';
	let rolls = [];
	if (command.length > 1){var addition = parseInt(command[1]);};

	let numberOfDice = command[0].substring(0, command[0].indexOf('d'));
	let numberOfSides = command[0].substring(command[0].indexOf('d')+1);

	for(;numberOfDice > 0;numberOfDice--){
		let roll = Math.floor(Math.random() * numberOfSides + 1);
		rolls.push(roll);
		message += staticValues.symbols[guildID]['d20'] + roll;
		if(numberOfDice != 1){message += spacer;};
		total += roll;
	}

	if (addition){total += addition; message += ' + '  + addition;};

	sortedRolls = new Uint32Array(rolls);
	sortedRolls.sort();

	if(drop == 'l'){
		total = total - sortedRolls[0];
		message += ' and dropping the lowest roll of ' + sortedRolls[0];
	}
	else if(drop == 'h'){
		highestRoll = sortedRolls.pop();
		total = total - sortedRolls[highestRoll];
		message += ' and dropping the highest roll of ' + sortedRolls[highestRoll];
	}

	return {'message':message, 'total':total};
};

DiceRoller.prototype.rollStarWarsDice = function(command, guildID){
	let message = '';
	let spacer = '   ';
	let rolls = new Array(0);

	//keep track of all rolls, not just last roll. Don't push array of arrys. Just array. 

	let colorOfDie = command.slice(-1);
	let numberOfSides = staticValues.diceArray[colorOfDie].sides;
	let numberOfDice = command.substring(0, command.length -1);

	for(;numberOfDice > 0;numberOfDice--){
		var roll = Math.floor(Math.random() * numberOfSides + 1);
		roll = staticValues.diceArray[colorOfDie].faces[roll].split(' ');
		rolls = rolls.concat(roll);
		message += staticValues.symbols[guildID][colorOfDie];
		for(value in roll){
			message += staticValues.symbols[guildID][roll[value]];
		}
		if(numberOfDice > 1){message += spacer;};
	}

	return {'message':message,'value':rolls};
};

module.exports = new DiceRoller();