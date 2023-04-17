const Airplane = function(name) {
  this.name = name;
  this.isFlying = false;
};

Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};

Airplane.prototype.land = function() {
  this.isFlying = false;
};

const airplane1 = new Airplane("Boeing 747");
console.log(airplane1.isFlying);

airplane1.takeOff();
console.log(airplane1.isFlying);

airplane1.land();
console.log(airplane1.isFlying);