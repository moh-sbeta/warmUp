// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

/*function revers(str){
	var arr  = str.split(' ');
		console.log(arr);
		newArr = [];
		var newStr = "";

	for(var i = 0; i < arr.length; i++){
			newArr.unshift(arr[i])
	}
		console.log(newArr);
		

		for(var i = 0; i < arr.length; i++) {
			newStr = newStr + 
		}
		


		return newArr.toString();



}*/


function revers(str){
	var newStr = "";

	for(var i = 0; i < str.length; i++){
		newStr = newStr + str[i];
	}


	return newStr;
}
