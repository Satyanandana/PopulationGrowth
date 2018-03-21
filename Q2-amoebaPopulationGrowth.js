// Looking at the problem,I figured that the population growth patten resembles the Fibonacci sequence.

// I prefer Iterative instead of recursive function ,to get the nth year population growth considering the following factors .
// 1.) Time complexity is O(n) for iterative,where as O(2^n) for recursive
// 2.) Space complexity is constant for iterative,where as O(n) for recursive

// I prefer while loop intead of for loop in this case,in order to avoid unnecessary variables.

function populationGrowth (simulationLength) {
	
	var noOfChildren = 1;
	var noOfAdults = 0;
	var temp;
	
	while (simulationLength>0) {
		temp = noOfChildren;
		noOfChildren = noOfAdults;
		noOfAdults += temp;
		simulationLength--;
	}
	
	console.log("Adults : " + noOfAdults);
	console.log("Children : " + noOfChildren);
	
	return noOfAdults + noOfChildren;
}

var population_4th_year = populationGrowth(4);
var population_5th_year = populationGrowth(5);
var population_6th_year = populationGrowth(6);

console.assert(population_4th_year===5,'Population in 4th year should be 5 not :' + population_4th_year,population_4th_year===5);
console.assert(population_5th_year===8,'Population in 5th year should be 8 not :' + population_4th_year,population_5th_year===8);
console.assert(population_6th_year===13,'Population in 6th year should be 13 not :' + population_4th_year,population_6th_year===13);
