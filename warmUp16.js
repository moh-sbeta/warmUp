// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function form(str){
	var counter = {
				countB: 0,
				countA: 0,
				countL: 0,
				countO: 0,
				countN: 0
			}
	for (var i = 0; i<str.length; i++){
		if(i === 'b'){
			counter.countB= counter.countB + 1;
			}else{ if(i === 'a' || i === 'A'){
					counter.countA = counter.countA + 1;
					}else{ if(i === 'l' || i === 'L'){
							counter.countL = counter.countL + 1;
							}else{
								if(i === 'o' ||i === 'O'){
								counter.countO = counter.countO + 1;
								}else{
									if(i === 'n' || i === 'N'){
									counter.countN = counter.countN + 1;
									}
								}
							}
						}
					}
					
				}
				console.log(counter)
}
//  need mor time to correct and compar with count of each letter
