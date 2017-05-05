var ClozeCard = require("./clozeCard");
var BasicCard = require("./basicCard");
var inquirer = require("inquirer");

module.exports = BasicCard;

var washington = new ClozeCard("George Washinton was the first president of the united states.", "was the first president of the united states.", "George Washinton");
console.log(washington.partial);


module.exports = ClozeCard();

var create = function(arg1, arg2){
	switch(arg1){
		case "cloze":
		createCloze(arg2);
		break;

		case "basic":
		createBasic(arg2);
		break;
	}
};

function createCloze(){

}

create(process.argv[2], process.argv[3]);