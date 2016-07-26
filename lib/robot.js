'use strict';

class Robot {
  constructor(){
    this.bearing = null;
    this.coordinates = null;
  }

  orient(direction) {
    var directions = ['east', 'south', 'west', 'north'];
    if (directions.includes(direction)){
      this.bearing = direction;
    } else {
      throw(new Error("Invalid Robot Bearing"))
    }
  }

  turn(directions){
    var i = directions.indexOf(this.bearing);
    i = (i + 1) % 4
    this.bearing = directions[i]
  }

  turnRight(){
    this.turn(['north', 'east', 'south', 'west']);
  }

  turnLeft(){
  this.turn(['north', 'west', 'south', 'east']);
  }

  at(x, y){
    this.coordinates = [x, y]
  }

  advance(){
    var ns = ['north', 'south'], ew = ['east', 'west']
    var directionValues = {
      north: 1,
      south: -1,
      east: 1,
      west: -1
    }
    var move = directionValues[this.bearing]

    if (ns.includes(this.bearing)) {
      this.coordinates[1] += move
    } else {
      this.coordinates[0] += move
    }
  }

  instructions(str){
   var steps = str.split("");
   var result = []
   var moves = {
     "R": "turnRight",
     "L": "turnLeft",
     "A": "advance"
   }


   steps.forEach((s) => {
     result.push(moves[s])
   })
   return result
 }

 place(obj){
   debugger
   this.orient(obj.direction)
   this.at(obj.x, obj.y)
 }

 evaluate(str){
   var ins = this.instructions(str)
   ins.forEach((s) => {
     if (s == "turnRight"){
       this.turnRight()
     } else if (s == "turnLeft"){
       this.turnLeft()
     } else{
       this.advance()
     }
   })
 }
}
