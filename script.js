function classWork1 (){
	let ask = prompt("take a numb").match(/\d+/);
	for (let i=1; i<=ask ; i++){
	  console.log(`numb:${i}`)
	}
}
function classWork2 (){
	const days = {
	  1:'monday',
	  2:'tuesday',
	  3:'wednesday',
	  4:'thursday',
	  5:'friday',
	  6:'saturday',
	  7:'sunday',
	  8:'monday',
	  9:'tuesday',
	  10:'wednesday',
	  11:'thursday',
	  12:'friday',
	  13:'saturday',
	  14:'sunday',
	  15:'monday',
	  16:'tuesday',
	  17:'wednesday'
	}
	let rec={};
	for (let day in days){
	  let wDay = days[day];
	  if (wDay in rec){
		rec[wDay]++
	  }else{
		rec[wDay]=1
	  }
	}
	for (let week in rec){
	   console.log(`${week}: ${rec[week]}`)
	}
}
function classWork3 (){
	let binar = new Array();
	let num
	do{
	  num = prompt("введите 0/1");
	  binar.push(num)
	}while(num != null)
	  var otv = binar.join("");
	  var assk = parseInt(otv, 2);
	  alert(assk)
	  console.log(assk);
}
function homeWork(){
	var str = '';
	var numb = prompt("numb");
	var diez = numb
	var minus = 0
	for (var i = 0; i < numb; i++) {
		let m = "-".repeat(diez-- -1)
		let d = "#".repeat(minus++ + minus)
		str = m + d + m
		console.log(str)
	}
}