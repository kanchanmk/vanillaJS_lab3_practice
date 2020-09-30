const submissions = [
	{
		name: "Jane",
		score: 95,
		date: "2020-01-24",
		passed: true,
	},
	{
		name: "Joe",
		score: 77,
		date: "2018-05-14",
		passed: true,
	},
	{
		name: "Jack",
		score: 59,
		date: "2019-07-05",
		passed: false,
	},
	{
		name: "Jill",
		score: 88,
		date: "2020-04-22",
		passed: true,
	},
];

const addSubmission = (array, newName, newScore, newDate) => {
	submissions.push({
		name: newName,
		score: newScore,
		date: newDate,
		passed: newScore >= 60 ? true : false,
	});
};

// addSubmission(submissions, "Kanchan", 98, "2020-09-25");
//console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
	array.splice(index, 1);
};

const deleteSubmissionByName = (array, name) => {
	let foundIndex = array.findIndex((item) => {
		return item.name === name;
	});

	array.splice(foundIndex, 1);
};
// deleteSubmissionByName(submissions, "Jack");
// console.log(submissions);

const editSubmission = (array, index, score) => {
	array[index].score = score;
	array[index].passed = score >= 60 ? true : false;
};
// editSubmission(submissions, 0, 55);
//console.log("After Edit", submissions);

const findSubmissionByName = (array, name) => {
	return array.find((item) => {
		return item.name === name;
	});
};

//console.log(findSubmissionByName(submissions, "Jane"));
const findLowestScore = (array) => {
	let lowest = array[0].score;

	array.forEach((element) => {
		if (element.score < lowest) {
			lowest = element.score;
		}
	});

	return lowest;
};
//console.log("Lowest : ", findLowestScore(submissions));

const findAverageScore = (array) => {
	let avgScore = 0;
	for (item of array) {
		avgScore += item.score;
	}
	return avgScore / array.length;
};
//console.log("average", findAverageScore(submissions));

const filterPassing = (array) => {
	return (filteredArray = array.filter((item) => {
		return item.score >= 60;
	}));
};
//console.log("passing", filterPassing(submissions));
const filter90AndAbove = (array) => {
	return array.filter((item) => {
		return item.score >= 90;
	});
};
//console.log("90 +", filter90AndAbove(submissions));

/// Extended Challenge

const createRange = (start, end) => {
	let newArray = [];
	while (start != end) {
		newArray.push(start++);
	}
	newArray.push(start);
	return newArray;
};

// console.log(createRange(2, 6));

const countElements = (array) => {
	let newObj = new Object();
	array.forEach((item) => {
		newObj.hasOwnProperty(item) ? newObj[item]++ : (newObj[item] = 1);
	});
	return newObj;
};

console.log(countElements(["a", "b", "a", "c", "a", "b", "d", "b", "c"]));
