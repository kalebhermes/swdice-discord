var staticValues = require('./staticValues.js');

var ValueParser = function(){};

ValueParser.prototype.parse = function(values, guildID){
	let returnValue = {
		'Success': 		0,
		'Advantage': 	0,
		'Failure': 		0,
		'Threat': 		0,
		'Triumph': 		0,
		'Despair': 		0,
		'Black': 		0,
		'White': 		0,
		'Blank':  		0
	}

	for (value in values){
		returnValue[values[value]] += 1;
	}

	returnValue = this.balance(returnValue);
	returnValue = this.message(returnValue, guildID);

	return returnValue;
};

ValueParser.prototype.balance = function(values){
	if(values.Success >= values.Failure){
		values.Success -= values.Failure;
		values.Failure = 0;
	} else {
		values.Failure -= values.Success;
		values.Success = 0;
	}
	if(values.Advantage >= values.Threat){
		values.Advantage -= values.Threat;
		values.Threat = 0;
	} else {
		values.Threat -= values.Advantage;
		values.Advantage = 0;
	}

	return values;
};

ValueParser.prototype.message = function(values, guildID){
	let message = '';
	for (key in values){
		for(;values[key] > 0;values[key]--){
			message += staticValues.symbols[guildID][key];
		}
	}
	return message;
};

ValueParser.prototype.splitString = function(string){
    let middle = Math.floor(string.length / 2);
    let before = string.lastIndexOf(' ', middle);
    let after = string.indexOf(' ', middle + 1);

    if (before == -1 || (after != -1 && middle - before >= after - middle)) {
        middle = after;
    } else {
        middle = before;
    }

    let s1 = string.substr(0, middle);
    let s2 = string.substr(middle + 1);

    return [s1, s2];
}

module.exports = new ValueParser();