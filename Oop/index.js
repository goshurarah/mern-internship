// class Person {
//     yourSelf() {
//         console.log(`Name = ${this.name}`)
//         console.log(`Father = ${this.father}`)
//         console.log(`Age = ${this.age}`)
//     }
// }
// let person = new Person()

// person.name = 'ali'
// person.father = 'akbar'
// person.age = 25

// person.yourSelf()





// class Calculator {
//     add() {
//         console.log(`Result = ${this.a + this.b}`)
//     }
//     sub() {
//         console.log(`Result = ${this.a - this.b}`)
//     }
//     mul() {
//         console.log(`Result = ${this.a * this.b}`)
//     }
//     div() {
//         console.log(`Result = ${this.a / this.b}`)
//     }
// }
// let calculator = new Calculator()

// calculator.a = 10
// calculator.b = 5

// calculator.add()
// calculator.sub()
// calculator.mul()
// calculator.div()



// class Person {
//     selfInfo() {
//         console.log(`Name = ${this.name}`)
//         console.log(`Father = ${this.father}`)
//         console.log(`Age = ${this.age}`)
//         console.log(`Age = ${this.city}`)
//     }
//     printData(){
//         let data=this.selfInfo()
//         console.log(data);

//     }
// }
// let person = new Person()

// person.name = 'ali'
// person.father = 'akbar'
// person.age = 25
// person.city='lhr'

// person.printData()





// class Person {
// // default constructor
//     constructor(){
//         this.name='ali'
//         this.age=35

//     }
//     print(){
//         console.log(this.name);
//         console.log(this.age)
//     }
// }
// let person = new Person()
// person.print()

// let person2 = new Person()
// person2.name='akbar'
// person2.age=10
// person2.print()








// class Person {

//     constructor(str1, str2, str3){
//         this.name=str1
//         this.age=str2
//         this.city=str3

//     }
//     print(){
//         console.log(this.name);
//         console.log(this.age)
//         console.log(this.city)
//     }
// }
// let val1='ali'
// let val2=25
// let val3='lhr'
// let person = new Person(val1,val2,val3)

// person.print()




// class Vehicle {
//     insurance(months) {
//         return 2
//     }
// }
// class Bike extends Vehicle {
//     insurance(months) {
//         return months * 2
//     }
// }
// class Car extends Vehicle {
//     insurance(months) {
//         return months * 2
//     }
// }
// class Bus extends Vehicle {
//     insurance(months) {
//         return months * 2
//     }
// }
// let bike = new Bike()
// console.log('Bike = ', bike.insurance(10));

// let car = new Car()
// console.log('Bike = ', car.insurance(12));

// let bus = new Bus()
// console.log('Bike = ', bus.insurance(15));








// class A {
//     outputA() {
//         return this.a
//     }
// }
// class B extends A {
//     outputB() {
//         return this.b
//     }
// }
// class C extends B {
//     outputC() {
//         return this.c
//     }
// }
// class D extends C {
//     outputD() {
//         return this.d
//     }
//     constructor(a, b, c, d) {
//         super()
//         this.a = a
//         this.b = b
//         this.c = c
//         this.d = d

//     }
// }
// let dd = new D('apple', 'bnana', 'cat', 'dog')
// console.log(dd.outputA());
// console.log(dd.outputB());
// console.log(dd.outputC());
// console.log(dd.outputD()); 




// class AbstractClass {
//     insurance(months) {
//         return 0
//     }
//     constructor() {
//         if (this.constructor === AbstractClass) {
//             throw new Error("This is abstract class error")
//         }
//     }
// }
// class ChildClass1 extends AbstractClass {
//     insurance(months) {
//         return months * 2
//     }
// }
// class ChildClass2 extends AbstractClass {}


// //this is abstract class, in which we cannot create object of abstract class
// // let abc = new AbstractClass()

// let child_class1 = new ChildClass1()
// console.log(child_class1.insurance(10));
// let child_class2 = new ChildClass2()
// console.log(child_class2.insurance(30));





// class staticMembers{
//     static person(){
//         console.log('hello this is static function');
//     }
// }
// staticMembers.person()




// class Car {
//     get color() {
//         return this._color
//     }
//     get model() {
//         return this._model
//     }
//     set color(value1) {
//         this._color = value1
//     }
//     set model(value2) {
//         this._model = value2
//     }
// }
// let car = new Car()
// car.color = 'red'
// car.model = 'bmw'
// console.log(car.color);
// console.log(car.model);


// const aray=[23432,234234,234234,234242]

// class Triangle {
//     constructor(a, b, c) {
//         this.a = a
//         this.b = b
//         this.c = c
//     }
//     calArea(){
//         let a=this.a
//         let b=this.b
//         let c=this.c
//         let p=(a+b+c)/2

//         let area=Math.sqrt(p*(p-a)*(p-b)*(p-c))
//         console.log('Area = ', area);
//     }
// }
// let triangle=new Triangle(3,4,5)
// console.log(triangle.calArea());


//polymorphism

// class Figure {
//     calc() {
//         return 0
//     }
// }
// class Square extends Figure {
//     constructor(value) {
//         super()
//         this.value = value
//     }
//     calc() {
//         console.log('Square = ', this.value * this.value);
//     }
// }
// class Triangle extends Figure {
//     constructor(a, b, c) {
//         super()
//         this.a = a
//         this.b = b
//         this.c = c
//     }
//     calc() {
//         let a = this.a
//         let b = this.b
//         let c = this.c
//         let p = (a + b + c) / 2
//         let area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
//         console.log('Triangle = ', area);
//     }
// }


// let square = new Square(3)
// let triangle = new Triangle(3, 4, 5)

// square.calc()
// triangle.calc()






//                              LOGICAL QUESTIONS

// //QUESTION NO 1
// let string = ''
// for (let i = 0; i <= 10; i++) {
//     string = string + i
//     console.log(string);
// }


// //QUESTION NO 2
// for(let i=0; i<10; i++){
//     i+=1
//     console.log(i);
// }


// //QUESTION NO 3
// for(let i=1; i<10; i++){
//     i+=1
//     console.log(i);
// }


// //QUESTION NO 4
// for (let i = 0; i < 11; i++) {
//     console.log(`2 * ${i} = ${2 * i}`);
// }

// //QUESTION NO 5
// let str = 1
// for (let i = 0; i < 11; i++) {
//     str = str * 2
//     console.log(str);
// }


// //QUESTION NO 6
// let string = ''
// for (let i = 0; i < 5; i++) {
//     string += '*';
//     console.log(string);
// }


// //QUESTION NO 7
// let res = (a, b) => {
//     let value1 = a - 30
//     let value2 = b + 30
//     return `${value1} ${value2}`
// }
// console.log(res(60, 30));