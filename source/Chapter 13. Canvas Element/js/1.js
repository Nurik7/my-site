// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var circle = function(x,y,radius,fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x,y,radius, 0, Math.PI*2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
// var drawSnowman = function(x, y) {
//     ctx.fillStyle = 'Black';
//     ctx.lineWidth = 4;
//     circle(x+50, y+110, 40, false);
//     circle(x+50, y+40, 30, false);
//     circle(x+40, y+35, 5, true);
//     circle(x+60, y+35, 5, true);
//     circle(x+50, y+90, 5, true);
//     circle(x+50, y+110, 5, true);
//     circle(x+50, y+130, 5, true);
//     ctx.fillStyle = 'orange';
//     circle(x+50, y+45, 5, true);
// };




// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// ctx.lineWidth = 4;
// function drawPoints(array) {
//     ctx.beginPath();
//     ctx.moveTo([0][0], [0][1]);
//     for (var i = 0; i < array.length; i++) {
//         ctx.lineTo(array[i][0], array[i][1]);
//     }
//     ctx.stroke();
// }
// var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
// var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];







// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var circle = function (x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI * 2, false);
//     ctx.fill();
// };
// $('#canvas').mousemove(function (event) {
//     circle(event.offsetX, event.offsetY);
// });



var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 4;
// ctx.strokeRect(40, 10, 20, 20);
// ctx.fillRect(48, 30, 4, 50);
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(30, 40);
// ctx.moveTo(50, 50);
// ctx.lineTo(70, 40);
// ctx.moveTo(50, 80);
// ctx.lineTo(30, 110);
// ctx.moveTo(50, 80);
// ctx.lineTo(70, 110);
// ctx.stroke();




function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray(wordOfArray) {
    var answerArray = [];
    for (var i = 0; i < wordOfArray.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
}
function showPlayerProgress(progress) {
    alert(progress.join(' '));
}
function getGuess() {
    return prompt('Guess the letter or press Cancel for exit').toLowerCase();
}
function updateGameState(correctGuess, correctWord, correctArray) {
    var a = 0;
    for (var j = 0; j < correctWord.length; j++) {
        if (correctWord[j] === correctGuess && correctArray[j] === '_') {
            correctArray[j] = correctGuess;
            remainingLetters--;
            for (var a; a < 1; a++) {
                totalAttempts++;
            }
        }
    }
    if (correctWord[j] !== correctGuess) {
        totalAttempts--;
        switch (totalAttempts) {
            case 4:
                ctx.strokeRect(40, 10, 20, 20);
                ctx.fillRect(48, 30, 4, 50);
                break;
            case 3:
                ctx.beginPath();
                ctx.moveTo(50, 50);
                ctx.lineTo(30, 40);
                ctx.stroke();
                break;
            case 2:
                ctx.beginPath();
                ctx.moveTo(50, 50);
                ctx.lineTo(70, 40);
                ctx.stroke();
                break;
            case 1:
                ctx.beginPath();
                ctx.moveTo(50, 80);
                ctx.lineTo(30, 110);
                ctx.stroke();
                break;
            case 0:
                ctx.beginPath();
                ctx.moveTo(50, 80);
                ctx.lineTo(70, 110);
                ctx.stroke();
                break;
        }

        // ctx.beginPath();



        // ;
        // ctx.stroke();
    }
}
function showAnswerAndCongratulatePlayer(arrayWord, secretWord) {
    alert(arrayWord.join(' '));
    alert('Good job! The word was "' + secretWord + '"');
}
var words = [
    'cat',
    'bat',
    'vase',
    'kitten',
    'star',
    'lamp',
    'box',
    'bed',
    'fox',
    'jam',
    'pig',
    'cup',
    'gun',
    'dog'
];
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var totalAttempts = 5;
while (remainingLetters > 0 && totalAttempts > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        window.alert('Please, enter only one letter');
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
    }
    console.log(totalAttempts);
}
showAnswerAndCongratulatePlayer(answerArray, word);




