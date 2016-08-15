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

	$scope.totalIncome = 0;

	$scope.totalExpenses = 0;

	$scope.totalLeft = 0;


	// Create income function
	$scope.addIncome = function() {
		// Make sure user inputs all fields.
		if ($scope.newIncome.text === 0 || $scope.newIncome.amount === undefined)
			alert('Please fill in all the fields');

		$scope.incomes.push(
		{
			amount: parseInt($scope.newIncome.amount),
			description: $scope.newIncome.text
		});

		$scope.totalIncome += parseInt($scope.newIncome.amount);
		$scope.totalLeft += parseInt($scope.newIncome.amount);


		$scope.newIncome = {};
		
		};

	// Create expense function
	$scope.addExpense = function() {


		$scope.expenses.push(
		{
			amount: parseInt($scope.newExpense.amount),
			description: $scope.newExpense.text
		});

		$scope.totalExpenses += parseInt($scope.newExpense.amount);
		$scope.totalLeft -= parseInt($scope.newExpense.amount);

		$scope.newExpense = {};
	};

});


