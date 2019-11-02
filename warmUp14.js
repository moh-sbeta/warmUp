/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // YOUR CODE HERE
  var weeklyPrice = {};
	weeklyPrice.mon = prices[0];
	weeklyPrice.tus = prices[1];
	weeklyPrice.wen = prices[2];
	weeklyPrice.thu = prices[3];
	weeklyPrice.fri = prices[4];
	weeklyPrice.sat = prices[5];

	return weeklyPrice;
};

function maxPrice(prices){
	var max = 0;
	
	for(var i = 0; i < prices.length; i++){
		if(prices[i] > max){
			max = prices[i];
		}
	}
	return max;
}









/*
function weeklyPrice(prices){
	var max = 0;
	var min = 0;
	
	for(var i = 0; i < prices.length; i++){
		if(prices[i] > max){
			max = prices[i];
		}
	}
	return max;
}
*/