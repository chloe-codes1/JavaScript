/**
 * JavaScript 객체 (chapter 9) 
 */

const log = console.log;

let array = ['가','다','하','나']; //-> new array 안하고 바로 하기

array[4]="~~~~~~~~~"; // -> data 바로 추가 가능 (size가 자유롭게 조절됨)
array.pop();
array.push('A');



for(let i = 0 ; i<array.length ; i++){
//	log(array.pop());
}

// [ JavaScript는 -> 아니고 => 다! ]
//array.forEach(i => log(i));
//array.forEach(i => document.write("<h4>" + i +"</h4>")); //document.write 도 된다~!

//array.filter(i => i> '다').forEach(i=>log(i));



// [ JavaScript 객체 : 싱글톤 ]
// : 객체 상수(object literal)를 사용하여 생성된 객체
//   -> 추가로 객체를 생성하려면 동일한 코드를 반복해야함
//      => 싱글톤이란 객체가 하나만 생성 된다는 것!

//student 객체 만들기 => 이게 바로 싱글톤!
let student = {
		name: "홍길동",
		ko: 99,
		eng: 100,
		sum:function(){
			return this.ko+this.eng; 
		},
		avg:function(){
			return this.sum()/2;
		}
}

//this keyword 생략 해보기
// : 객체 생성시에는 문제 없어 보였으나, 접근이 안됨! => this keyword 생략하면 에러난다!

/*이렇게 하면 에러남~ this 없어서~
 * let student = {
		name: "홍길동",
		ko: 99,
		eng: 100,
		sum:function(){
			return ko+eng;
		},
		avg:function(){
			return sum()/2;
		}
}*/


student["name"]
student.name
student.avg()

//이미 student 객체가 memory에 떠있는데도 member variable을 자유롭게 넣고 뺄 수 있음    -> 함수도 가능!!
student.address='서울';
delete student.address;

student.age=25;

//delete student.sum;
    //-> sum을 삭제하면 avg() 호출 안됨

//sum 없이도 객체 생성은 되지만, student.avg() 호출 시 에러 발생함!
// -> why? JavaScript는 interpreter언어라서 compile시에 확인 못함 => 호출시에 browser에 띄우면서(실행하면서1!!!!!!!!!!!그런걱엿어@@!@)
/*let student = {
		name: "홍길동",
		ko: 99,
		eng: 100,
		avg:function(){
			return this.sum()/2;
		}
}*/

for(let data in student){
	log(data); //name,ko,eng,sum,avg,age
	log(student.data); // -> 이렇게 하면 undefined 라고 뜸! => 아래의 방법 사용해야해이~
	log(student[data]); // -> student객체 안에 있는 key값에 assign된 data들 출력됨   => map구조 같은 느낌적인 느낌
}

let product = [
	{name:"바나나", price:1500},
	{name:"아보카도", price:1500},
	{name:"복숭아", price:1500},
	{name:"삼겹살", price:15000},
	{name:"뿌링클", price:18000}
];

product[0];
product[3].name;
product[4]["name"];
product[1].price;

for (let data in product){
//	log(data);  //-> 이렇게 하면 index가 출력됨
//	log(product[data]) //-> 이렇게 해야 데이터 출력된다!
	
	//for loop안에 있는 for loop!!
	for(let d in product[data]){
//		log(product[data][d]);  // -> 이차원 배열처럼 출력한다~~
	}
}

//위에 for loop 복잡하니까 method로 만들기
function print_product(data){
	log(data.name, " : ", data.price)
}

//print_product(product[0]);

for(let data in product){
//	print_product(product[data]);
}

//forEach 써보기!
product.forEach(i=> log(print_product(i)));




// [ JavaScript 객체 - 생성자 함수를 통한 객체 생성 ]
// : 객체는 자신만의 데이터를 가지며
//   함수는 공유하도록 설계한다 => prototype
//    => 마치 Java의 static method 처럼!

function Student(name, ko, eng){
  //-> 생성자 함수 라서 function name capitalize 함
  //-> Student는 class 같은 애...(?)
  //-> data만 들어있음	
	this.name = name;
	this.ko = ko;
	this.eng = eng;
}

//prototype -> 공유영역에 method를 올리는 것 => Java의 static method 같은 것
Student.prototype.sum=function(){
	
	return this.ko + this.eng;
}

Student.prototype.avg=function(){
	return this.sum()/2;
}

let s1 = new Student("김주현", 100, 100);
let s2 = new Student("이주현", 80, 70);
let s3 = new Student("박주현", 20, 50);
let s4 = new Student("최주현", 40, 70);
let s5 = new Student("임주현", 60, 80);
let s6 = new Student("홍주현", 70, 100);

//Object로 하면 Student type뿐만 아니라 모든~~애들이 쓸 수 있는 function이 됨!
Student.prototype.grade=function(){
	
	return this.avg()>80 ? 'A' : this.avg()>60 ? 'B' : 'C';
}

//prototype method avg() 호출
//log(s1.name, "/"+s1.avg(), "/", s1.grade());
//log(s2.name, "/"+s2.avg(), "/", s2.grade());
//log(s3.name, "/"+s3.avg(), "/", s3.grade());


let students = [
	new Student("김주현", 100, 100),
	new Student("이주현", 80, 70),
	new Student("박주현", 20, 50),
	new Student("최주현", 40, 70),
	new Student("임주현", 60, 80),
	new Student("홍주현", 70, 100)
];


//students의 평균 list 출력
/*
let testin;
let testof;


log("students의 평균 list in으로 출력");
// in을 쓰면 index나옴
for(let data in students){
	testin=data; // -> 이렇게 하면 in으로 찍은 마지막 데이터 뭔지 알 수 있음 => 5 나옴 => index
	//in을 쓰고 data 뽑으려면 wrapping 시켜야함
	log(students[data].name, "/", students[data].avg());
}

log("students의 평균 list of로 출력");
// of를 써야 data가 출력됨
for(let data of students){
	testof = data;
	log(data.name, "/", data.avg());
}
*/

log(s1.toString()); //-> [object object] 찍힘 => object가 갖고있는 toString method가 동작함
//log("~~~~".toString()); //-> ~~~~ 찍힘

Student.prototype.toString = function(){
	return this.name + "/" +this.sum()+ " -> "+this.avg();
}

log(s1.toString()); //-> 이젠 제대로 data 찍힘
log(s2.toString()); 

log("for loop로 students data 출력")
for(let data of students){
	log(data.toString());
}

//forEach 사용해보기
students.forEach(i=> log(i));
students.forEach(i=> log(i.toString()));
students.forEach(i=> log(i.avg()));




