function Stack() {

  var storage = [];
  this.add = function(value) {
	storage.push (value);
  }
  this.remove = function() {
	if(storage.length !== 0) {
		return storage.shift ();	
  	} else {
		console.log("Queue is empty")
  	}
  }
  this.size = function() {
	return storage.length;
  }
}