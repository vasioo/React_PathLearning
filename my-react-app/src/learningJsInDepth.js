//--> arr functions

let createBlog = (title,body) =>{
    if(!title){
        throw new Error('A title is required');
    }
    if(!body){
        throw new Error('Body cannot be empty');
    }
    return alert(`${title} - ${body}`);
}

createBlog('Blog title','Blog body');

//--> this keyword

let bulgaria = {
    mountains: ['Pirin','Rhodopes','Nqma'],

    printWithDash:function(){
        setTimeout((()=>
            console.log(this.mountains.join(" - "))),1000)
    }
}
bulgaria.printWithDash();

//-->Destructing obj

let thingsToDo = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ["Sleep", "Dream"]
}

let { morning, afternoon } = thingsToDo;

morning = 'Run';

console.log(morning, ' - ', afternoon);

let uniStudent = ({name,university}) => {
    let {name,university} = student;
    console.log(`${name} from ${university}`);
};

uniStudent({
    name: 'Vako',
    university: 'Nqkuv si'
});

//--> Destructuring array

//x:x - when leaving that comma it takes the element at the position after the comma
let [,,firstMountain]=['Rila','Pirin','Rhodope'];
console.log(firstMountain);

//--> Restructuring

var adverntureClimbing = {
     name : 'Rila',
     height : 2925,
     output : function () {
        console.log(`Mt. ${this.name} is ${this.height} m tall`);
    }
};
console.log(adverntureClimbing.output());

//--> Spread and rest operator

var mountains = ['Rila','Pirin','Rhodope'];
var mountainsFromJapan = ['Fuji'];

//combines them
var allMountains= [...mountains,...mountainsFromJapan];
console.log(allMountains);

var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chicken curry'
}

var night = {
    dinner : 'noddle soup'
}

var picnic = {...day,...night};

console.log(picnic);

var rivers = ['Nile','Amazon','Mesta'];
var [first,...rest] = rivers;

console.log(rest);

//-->Classes
function Holiday(destination,days){
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function(){
    console.log(this.destination + " | " + this.days + "days");
}

var macedonia = new Holiday("Bulgaria",30);
console.log(macedonia.info());

class Holiday{
    constructor(destination,days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days.`);
    }

}

class Expedition extends Holiday{
    constructor(destination,days,gear){
        super(destination,days)
        this.gear = gear;
    }

    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(" and your")}`)
    }
}

const tripWithGear = new Expedition("Rila",30,["Sunglasses","Backpack","Toiletry"]);
tripWithGear.info();