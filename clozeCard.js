var ClozeCard = function(text, partial, cloze){
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = text;
};

module.exports = ClozeCard;