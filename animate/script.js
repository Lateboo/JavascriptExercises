var database = [
	{
		username: "Parker",
		password: "superduper"
	}{
		username: "Bobby",
		username:"thissucks",
	},
	{
		username: "Sally",
		username: "bummer"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning",
	},
	{
		username: "Sally",
		timeline: "Javascript is too cool"
	}
];

var userNamePrompt= prompt("What is your username?");
var passWordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	var set = false; 
		if (user===database[0].username && pass===database[0].password) {
			alert("Well hello there Parker!");
		} else {
			alert("That is the wrong username/password. Try Again.");
		}
	
}		

signIn(userNamePrompt, passWordPrompt);