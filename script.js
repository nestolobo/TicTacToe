// var TicTacToe = angular.module('TicTacToe', []);
function TicTacToeController($scope) {
	$scope.board =
	[" ", " ", " ", " ", " ", " ", " ", " ", " "];
	$scope.turn = 0;
	$scope.oWins=0;
	$scope.xWins=0;
	$scope.ties=0
	$scope.numGames=1;
	$scope.gameStatus = true;
	$scope.clicker = function (cellIndex) {
		if ($scope.board[cellIndex] == 'O' || $scope.board[cellIndex] == 'X') {
			return;
		}
		if ($scope.gameStatus==false) {
			return;
		}
		$scope.turn ++;
		if ($scope.turn % 2 == 0) {
			$scope.board[cellIndex]='X';
		}
		else if ($scope.turn % 2 == 1) {
			$scope.board[cellIndex]='O';
		}
		$scope.reset = function() {
			$scope.board =
			[" ", " ", " ", " ", " ", " ", " ", " ", " "];
			$scope.gameStatus=true;
			$scope.turn = 0;
		}
		$scope.win = function() {
			if (($scope.board[0]=='X') && ($scope.board[1] == 'X') && ($scope.board[2] =='X')) {
				$scope.xWins++;
				$scope.gameStatus = false;
			}
			if (($scope.board[0]=='O') && ($scope.board[1] == 'O') && ($scope.board[2] =='O')) {
				$scope.oWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[0]=='X' && $scope.board[3] == 'X' && $scope.board[6] =='X') {
				$scope.xWins++;
				$scope.gameStatus = false;
				console.log($scope.gameStatus);
			}
			if ($scope.board[0]=='O' && $scope.board[3] == 'O' && $scope.board[6] =='O') {
				$scope.oWins++;
				$scope.gameStatus = false;
				console.log($scope.gameStatus);
			}
			if ($scope.board[0]=='X' && $scope.board[4] == 'X' && $scope.board[8] =='X') {
			$scope.xWins++;
			$scope.gameStatus = false;
			}
			if ($scope.board[0]=='O' && $scope.board[4] == 'O' && $scope.board[8] =='O') {
				$scope.oWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[1]=='X' && $scope.board[4] == 'X' && $scope.board[7] =='X') {
				$scope.xWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[1]=='O' && $scope.board[4] == 'O' && $scope.board[7] =='O') {
				$scope.oWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[2]=='X' && $scope.board[5] == 'X' && $scope.board[8] =='X') {
				$scope.xWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[2]=='O' && $scope.board[5] == 'O' && $scope.board[8] =='O') {
				$scope.oWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[2]=='X' && $scope.board[4] == 'X' && $scope.board[6] =='X') {
				$scope.xWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[2]=='O' && $scope.board[4] == 'O' && $scope.board[6] =='O') {
				$scope.oWins++;
				$scope.gameStatus=false;
			}
			if ($scope.board[3]=='X' && $scope.board[4] == 'X' && $scope.board[5] =='X') {
			$scope.xWins++;
			$scope.gameStatus = false;
			}
			if ($scope.board[3]=='O' && $scope.board[4] == 'O' && $scope.board[5] =='O') {
				$scope.oWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[6]=='X' && $scope.board[7] == 'X' && $scope.board[8] =='X') {
				$scope.xWins++;
				$scope.gameStatus = false;
			}
			if ($scope.board[6]=='O' && $scope.board[7] == 'O' && $scope.board[8] =='O') {
				$scope.oWins++;
				$scope.gameStatus = false;
			}
		}//close win function
		$scope.win();
		$scope.reset = function() {
			$scope.board =
			[" ", " ", " ", " ", " ", " ", " ", " ", " "];
			$scope.gameStatus=true;
			$scope.numGames++;
			$scope.turn= $scope.numGames+1;
			$scope.ties= $scope.numGames - $scope.xWins -$scope.oWins - 1;
		}
	} //close clicker
} //close controller
