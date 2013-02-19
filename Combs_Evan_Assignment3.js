//arrays
var generals = [Sampson, Archibald, Salvador, ];
var platoons = [];
//numbers
var selectedGeneral;
//bools
var mood;

//Platoon Constructor
var Platoon = function()
{	
	var name;
	var commander; 
	var size; 

	var setCommander = function(string)
	{
		commander = string;
	}
	var setName = function(string)
	{
		name = string;
	}
	var setSize = function(number)
	{
		size = number;
	}
	
	var getCommander = function()
	{
		return commander;
	}
	var getName = function()
	{
		return name;
	}
	var getSize = function()
	{
		return size;
	}
	
	return
	{
		"name": getName,
		"commander": getCommander,
		"size": getSize,
		"setCommander": setCommander,
		"setName": setName,
		"setSize": setSize
	}
};

//writes to the console log
var Write = function(string)
{
	console.log(string);
}

//this function is used to select who the General will be from the array of generals
var SelectGeneral = function()
{
	var random = Math.Floor(Math.random()) * 4;
	return random;
}

//this function uses who the general is and his mood to decide what the general should say
var GeneralsMood = function(string, bool)
{
	if (bool === true)
	{
		if (string === generals[0])
		{
			write();
		}
		else if (string === generals[1])
		{
			write();
		}
		else if (string === generals[2])
		{
			write();
		}
		else
		{
			write();
		}
	}
	else
	{
		write();
	}
}

//this creates an array of platoons then returns the array
var CreatePlatoons = function(number)
{
	var addedPlatoons;	
	for (var i = 0; i < number; i++)
	{
		addedPlatoons.push(Platoon());
	}
	
	return addedPlatoons;
}