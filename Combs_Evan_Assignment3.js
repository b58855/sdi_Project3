//arrays
var generals = ["Sampson", "Archibald", "Salvador"];
//objects
var army = {
	general: "", 
	platoons: [], 
	battleReady: true, 
	armySize: 0,
	setGeneral: function(string)
	{
		general = string;
	},
	getGeneral: function()
	{
		return general;
	},
	setPlatoons: function(array)
	{
		platoons = array;
	},
	getPlatoons: function()
	{
		return platoons;
	},
	setBattleReady: function(bool)
	{
		battleReady = bool;
	},
	getBattleReady: function()
	{
		return battleReady;
	},
	setArmySize: function(number)
	{
		armySize = number;
	},
	getArmySize: function()
	{
		return armySize;
	}
	};

//writes to the console log
var Write = function(string)
{
	console.log(string);
};

//Platoon Constructor
var Platoon = function()
{	
	var name;
	var commander; 
	var size; 
	
	return{
		name: name,
		commander: commander,
		size: size,
		}
};

//this function is used to select who the General will be from the array of generals
var SelectGeneral = function()
{
	var random = Math.floor(Math.random() * 3);
	return random;
};

//this function uses who the general is and his mood to decide what the general should say
var GeneralsMood = function(string, bool)
{
	var battleCry;
	if (bool === true)
	{
		if (string === generals[0])
		{
			battleCry = "Let's win the BATTLE!!!!!";
		}
		else if (string === generals[1])
		{
			battleCry = 'We have the advantage.';
		}
		else if (string === generals[2])
		{
			battleCry = 'Never give up. Never surrender!';
		}
		else
		{
			battleCry = 'We have our war!';
		};
	}
	else
	{
		battleCry = 'Live long for today we do not die.';
	};
	return battleCry;
};

//this creates an array of platoons then returns the array
var CreatePlatoons = function(number)
{
	var addedPlatoons = [];
		
	for (var i = 0; i < number; i++)
	{
		var aPlatoon = Platoon();

		aPlatoon.name = json.platoons[i].name;
		aPlatoon.commander = json.platoons[i].commander;
		aPlatoon.size = json.platoons[i].size;
		
		addedPlatoons.push(aPlatoon);
	};
	
	return addedPlatoons;
};

var ArmyRollCall = function(array)
{
	var squads = 0;
	var i = 0;
	while (i < array.length)
	{
		for (var j = 0; j < array[i].size / 10; j++)
		{
			squads++;
		}
		i++;
	}
	return squads * 10;
};

var ReadyForBattle = function(object)
{
	if (object.armySize > 5000)
	{
		return true;
	}
	else
	{
		return false;
	}
};


var CreateArmy = function()
{
	army.setGeneral(generals[SelectGeneral()]);
	army.platoons = CreatePlatoons(json.platoons.length);
	army.armySize = ArmyRollCall(army.platoons);
	army.setBattleReady(ReadyForBattle(army));
}
CreateArmy();


//output
Write('General ' + army.getGeneral() + ' walks up to the podium to talk to ' + army.armySize + ' soldiers.');
Write('We have ' + army.platoons.length + ' platoons:');
for (var i = 0; i < army.platoons.length; i++)
{
	Write('Platoon ' + army.platoons[i].name + ' with Commander ' + army.platoons[i].commander + ' has ' + army.platoons[i].size + ' soldiers.');
};
Write(GeneralsMood(army.getGeneral(), army.getBattleReady()));