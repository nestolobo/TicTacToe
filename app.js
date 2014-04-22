var TicTacToe = angular.module('TicTacToe', []);
function TicTacToeController($scope) {
	$scope.board =
	["a", "b", " ", " ", " ", " ", " ", " ", " "]
}
// var p1=false;
// var p2=false;
// if (!p1 || !p2) {
// 	if (rows.onClick == cells) {
// 		p1answer = "X";
// 		p1 = true;
// 		display();
// 	}
// 	else if (rows.onClick ==cells) {
// 		p2answer = "O";
// 		p2 = true;
// 		display ()
// 	}
// }