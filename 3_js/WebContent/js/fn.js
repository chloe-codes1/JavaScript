/**
 * JavaScript 함수 정리
 */

const log = console.log;
  // -> 함수의 정의부를 log라는 변수에 담았음
  // -> JavaScript는 1급 함수라서 가능하다!

log("fn.js log");
/* 변수 선언 */
let name = "홍길동";  
let flag = true < 10; /*
						 * true와 숫자를 비교하고 있음 -> Java에서는 에러 뜨는 것인데 javascript에서는
						 * true를 1로 봐서 true 출력됨
						 */ 
let now = new Date(); /* date 객체 선언해서 넣기 */
let num = 99;
const pi = 3.14;

// [ JavaScript 함수는 1급 함수 ]
// - 함수를 값으로 다룰 수 있다
// - 변수에 함수를 담을 수 있다!
// - 함수의 결과값 (리턴값)으로 사용 가능하다!
// - 함수의 인자로 사용 가능하다!


function f1(){
	
	alert("Hello JavaScript");
}

const f2 = f1;
  // -> 변수에 함수가 binding 될 수 있다

// anonymous method & lamda expression (여기선 => 임!)
const f3 = () =>alert("Hello JavaScript");

const f4 = (i) => alert(i);

function sum(a,b,c) {
	
	// 3번째 parameter 없으면 0으로 대체해라
	if(!b) b=0;
	if(!c) c=0;
	return a+b+c;
} 

function sumAll(){
	// -> () 로 넘어 오는 모든 parameter를 arguments 라고 함
	let sum = 0;
	for (let i = 0; i < arguments.length ; i++){
		// -> 매개변수의 size만큼 for문 돌리겠다
		sum+= arguments[i];
	}  
	return sum;
}

function small(a,b){

	if(a>b)return b;
		
	else return a;
}


// lamda expression & 삼항 연산자 사용
const min = (a,b) => a>b ? b: a;

/*
function callback(){
	
	log('callback');
}

// parameter로 함수가 들어 올 수 있음
// -> JavaScript는 일급 함수이고, 함수의 인자로 사용 가능해서!
function callTenTimes(fn){
	
	for(let i = 0 ; i<3 ;i++){
		//예외 처리로 함수명이아닌게 들어온 것 잡기
		try{
		fn();
		}catch(e){
		 log("함수 이름을 넘겨주세요.");
	 }
	}
}
	
callTenTimes(callback);


callTenTimes(function(){
	log("이름 없는 함수 callTenTimes로 호출");
});

callTenTimes(() => alert("람다식으로 callTenTimes 호출"));

let fc;
callTenTimes(fc=() => alert("callTenTimes로 fc() 함수 만들기"));


//뒤에 parameter는 ____mili second!
// -> 3초 간격으로 callback 호출해
// -> 멈추고 싶을 땐  clearInterval(intervalId)
let intervalId = setInterval(callback, 3000);
clearInterval(intervalId); //멈춰..



//1초마다 Date 찍어...
let id2 = setInterval(function() {
	log(new Date());
}, 1000)

//clearInterval(id2); //멈춰...


//5초 후에 멈춰...
setTimeout(function() {
	clearInterval(id2);
//	location.href="http://www.naver.com";
//	location.href="http://localhost:8000/2_css/submenu/index_answer.html";
}, 5000);

*/

function fa(){
	//함수안에서 선언된 변수
	let data = 0;
	
	//inner function
	function inner(){
		
		return ++data;
	}
	return inner;
}

//ff1은 inner 호출
let ff1 = fa;

//ff2는 inner를 갖고 있음 -> inner가 수행됨
//  => 이게 바로 closer!!!
let ff2 = fa();

//계속 새로 만들어서 같은 값이 출력됨   => java inner class 같은것
log(ff1()()); //1
log(ff1()()); //1
log(ff1()()); //1
log(ff1()()); //1

//closer => inner 함수는 outer 함수의 주소를 갖고 있기 때문에 한번 가진 주소를 계속 사용하므로 출력 값이 증거함
log(ff2());  //1
log(ff2());  //2
log(ff2());  //3
log(ff2());  //4


let fb1 = function fb(){
	
	let data = 0;
	function inner(){
		return ++data;
	}
	return inner;
};

let fb2 = function fb(){
	
	let data = 0;
	function inner(){
		return ++data;
	}
	return inner;
}();

