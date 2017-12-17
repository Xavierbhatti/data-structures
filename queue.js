function Queue() {

  this.storage = [];

};

Queue.prototype.add = function(value) {
	this.storage.push (value);
}

Queue.prototype.remove = function() {
	if(this.storage.length !== 0) {}
	this.storage.shift ();
}

Queue.prototype.size = function() {
	return this.storage.length;
}