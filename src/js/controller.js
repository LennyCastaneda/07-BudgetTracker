/**
*  Angular Module
* A web application using AngularJS that lets users track their income/expenses
* Description
*/
angular.module('budgetApp', [])
.controller('calculateCtrl', function($scope) {
	// Created an emtpy array to hold the income amounts.
	$scope.incomes = [];
	// Created an empty object to hold the new inputted income amounts.
	$scope.newIncome = {};
	
	// Created an emtpy array to hold the expense amounts.
	$scope.expenses = [];
	// Created an empty object to hold the new inputted expense amounts.
	$scope.newExpense = {};

	// Created an empty array to hold the left over after spending
	$scope.left = [];

	// Create a totalIncome variable and assign 0 to it for the Summary's single-binding starting value..
	$scope.totalIncome = 0;

	// Create a totalExpense variable and assign 0 to it for the Summary's single-binding starting value..
	$scope.totalExpenses = 0;

	// Create a totalLeft variable and assign 0 to it for the Summary's single-binding starting value.
	$scope.totalLeft = 0;


	// Create income function
	$scope.addIncome = function() {

		// Take in the user input values, parse those strings into numbers then push it to the incomes array.
		$scope.incomes.push(
		{
			amount: parseFloat($scope.newIncome.amount),
			description: $scope.newIncome.text
		});

		// Take in the user input values, parse those strings into numbers then push it to the incomes array.
		// Then add each increment to the Summary totalIncome and totalLeft single-binding variables.
		$scope.totalIncome += parseFloat($scope.newIncome.amount);
		$scope.totalLeft += parseFloat($scope.newIncome.amount);

		// Clear newIncome array for user input.
		$scope.newIncome = {};
		
		};

	// Create expense function
	$scope.addExpense = function() {

		// Take in the user  expense input values, parse those strings into numbers then push it to the expenses array.
		$scope.expenses.push(
		{
			amount: parseFloat($scope.newExpense.amount),
			description: $scope.newExpense.text
		});

		// Take in the user input values, parse those strings into numbers then push it to the expenses array.
		// Then add each increment to the Summary totalExpenses and totalLeft single-binding variables.
		$scope.totalExpenses += parseFloat($scope.newExpense.amount);
		$scope.totalLeft -= parseFloat($scope.newExpense.amount);

		// Clear newExpense array for user input.
		$scope.newExpense = {};
	};

});


