(function () {
	var wg = {};
	wg.Greeter = function (name) {
		this._name = name;
	};
	
	wg.Greeter.prototype.sayHello =  function() {
		return 'Hello, ' + this._name;
	}
	
	//expose our class
	window.wg = wg;
}(name) );