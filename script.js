function calculateMinCost() {
  //your code here
	let arr = [4, 2, 7, 6, 9];
	arr.sort((a-b)=>a-b);
	let result = arr.reduce((preElement,element,index)=>{
		return preElement + element;
	}, 0)
	console.log(result);
}  
