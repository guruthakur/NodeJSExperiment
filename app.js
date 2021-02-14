var events = require('events');
const { hrtime } = require('process');
var util = require('util');


var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);
var gurunath = new Person('gurunath');
var bhushan = new Person('bhushan');
var james = new Person('james');
var HBK = new Person('HBK');


var people = [gurunath, bhushan, james, HBK];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg);
    })
})
james.emit('speak', 'hey dudes');
HBK.emit('speak', 'I want a curry');


/*
# Case 1 Sample
// Sample how the emitter work and what are syntax
var myEmitter = new events.EventEmitter();


myEmitter.on('someEvent',function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent','The event was emitted');

*/