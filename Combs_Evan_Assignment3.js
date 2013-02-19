//arrays
var generals = [Sampson, Archibald, Salvador, ];
var platoons = [{},{},{}];
//numbers
var selectedGeneral;
//bools
var mood;


var Write = function(string)
{
	consol.log(string);
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