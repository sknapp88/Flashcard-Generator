var cloze = require("./clozeCard");
var basic = require("./basicCard.js");

// var ClozeCard = function(text, partial, cloze){
// 	this.cloze = cloze;
// 	this.partial = partial;
// 	this.fullText = text;
// };

var washington = new ClozeCard("George Washinton was the first president of the united states.", "was the first president of the united states", "George Washinton");
console.log(washington.cloze);


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

create(process.argv[2], process.argv[3]);