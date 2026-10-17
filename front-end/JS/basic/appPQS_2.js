//1
let months = ["jan", "feb", "aug", "sep"];
months.splice(0, 2, "jun", "july");
console.log(months);

//2
let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang.reverse().indexOf('javascript'));


//Tic-Tac-Toe game state
let game = [['X', ' ', 'O'],
[' ', 'X', ' '],
['O', ' ', 'X']];

game[0][1]=null;
game[1][0]=null;
game[1][2]=null;
game[2][1]=null;
console.log(game);
