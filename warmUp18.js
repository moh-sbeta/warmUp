// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1',
// else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function count(str) {
var count= 0;
var result = "";

	for(var i = 0; i < str.length; i++){
		count = 0
		for(var k = 0; k < str.length; k++){
			if(str[i] === str[k]){
				count+= 1;
			}
		 
		
	}result = result + count.toString();
}
return result;
}

// not the exact recuirment 





