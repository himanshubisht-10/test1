function coffee(flavour, size, milktype){
    this.flavour = flavour;
    this.size = size;
    this.milktype = milktype;
    this.describe = function(){
        console.log(A${this.size}${this.flavour}coffee with${})
    }
}
console.log()
const order1 = new coffee("cappuccino","medium","almond");
const order2 = new coffee("Lattice", "large", "cow");
class coffee{
  constructor{falvour,size, milktype}{
     this.flavour = flavour;
    this.size = size;
    this.milktype = milktype;

  }
class parent{
  contructor(){
    console.log("parent constructor");

  }
}
class child extends parent{
  constructor(){
    super();
    console.log("child constructor");

  }
}
const obj = new child;
//person detail with inheritance
class person{
  constructor(name, age){
    this.name = name;
    this.age = age;
   
  }
  introuduce(){
    console.log('Hi ,I'm ${this.name}and I'm ${this.age}year old.');
  }
}
class student extends person{
  constructor(name,age,course){
    super(name,age);
    this.course = course;
  }
  study(){
    console.log(`${this.name} is studying ${this.course}.`);
  }
}
const student1 = new student("Himanshu",21, "javascript");
student1.introduce();
student1.study();
 function car(model,brand){
  this.model= model;
  this.brand = year;
  this.displayInfo = function(){
    return`this is a ${this.year} ${this.model}`
  };
 }
 const car1 = new car("tata siera,2024");

 const car1 =  new car("sujuki hsreb");}
  function Dog(name){
    this.name= name;

  }
  Dog.prototype =object.create(Animal.prototype);
  const dog = new dog("husky");
  dog.speak();
  const person1={
    age: 34;
    name:'himanshu'
  };