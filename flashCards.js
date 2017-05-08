var ClozeCard = require("./clozeCard");
var BasicCard = require("./basicCard");
var inquirer = require("inquirer");
var fs = require('fs');

module.exports = BasicCard;

var create = function(arg1, arg2){
	switch(arg1){
		case "cloze":
		createCloze();
		break;

		case "basic":
		createBasic();
		break;
	}
};

function createCloze(){
	inquirer.prompt([
	{
		type: "input",
		message: "what is the complete text?",
		name: "fullText"
	},
	{
		type: "input",
		message: "what is the cloze text?",
		name: "cloze"
	},
	{
		type: "input",
		message: "what is the partial text?",
		name: "partial"
	}
	]).then(function(answers){
		fs.appendFile('flashLog.txt', JSON.stringify(answers), (err) => {
			if (err) throw err;
			console.log(answers.partial);
		});
	});
}

function clozeQuiz(){fs.readFile('flashLog.txt', (err, data) => {
	if (err) throw err;
	console.log(data.partial);
});
}

clozeQuiz();
create(process.argv[2], process.argv[3]);