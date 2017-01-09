'use strict';

 var Car = function (name, model, type) {
    if (name===undefined){
        this.name='General';
    }
    else {
        this.name=name;
    }

    if (model===undefined){
        this.model='GM';
    }
    else {
        this.model=model;
    }
    
    if (type===undefined){
        this.type='isSaloon';
    }
    else {
        this.type=type;
    }

    if (this.name === 'Porshe' || this.name === 'Koenigsegg') {
        this.numOfDoors = 2;
        this.distance = 50;
    }
    if (this.type === 'trailer') {
        this.isSaloon = false;
        this.numOfWheels = 8;
        this.distance = 11;
    }

    this.drive = function (time) {
        this.speed = this.distance * time + ' km/h';
        return this;
    };
};

var Vehicle = {
    name: 'General',
    model: 'GM',
    type: 'isSaloon',
    numOfDoors: 4,
    numOfWheels: 4,
    speed: '0 km/h',
    isSaloon: true
};


Car.prototype = Vehicle;
module.exports = Car;