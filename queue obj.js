function Queue() {

  storage = [];
  Queue.prototype.add = function(value) {
	storage.push (value);
}

Queue.prototype.remove = function() {
	if(this.storage.length !== 0) {
	return this.storage.shift ();	
	} else {
		console.log("Queue is empty")
	}
	
}

Queue.prototype.size = function() {
	return this.storage.length;
}
};

