//объявляю массив слов
var words = [
    'machine',
    'bat',
    'keyboard',
    'kitten',
    'rainbow',
    'people',
    'miyagi',
    'endspiel',
    'table',
    'mother',
    'cinema',
    'javascript',
    'football',
    'microsoft'
];
//создаю метод, чтобы выбирать рандомно слова из массива выше
var word = words[Math.floor(Math.random() * words.length)];
//создаю пустой массив для пустых ячеек букв
var answerArray = [];
//задаю цикл, чтобы подставить вместо всех букв в слове из массива нижнее подчеривание "_"
for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
//объявляю переменную remaining letters которая говорит сколько букв осталось
//также ей присвоено значание "длина word из массива words"
var remainingLetters = word.length;
var totalAttempts = 5;
setTimeout(() => {


    while (remainingLetters > 0 && totalAttempts > 0) {
        alert(answerArray.join(' '));
        var guess = prompt('Guess the letter or press Cancel for exit').toLowerCase();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            window.alert('Please, enter only one letter');
        } else {
            var a = 0;
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess && answerArray[j] === '_') {
                    answerArray[j] = guess;
                    remainingLetters--;
                    for (var a; a < 1; a++) {
                        totalAttempts++;
                    }
                }
            }
            if (word[j] !== guess) {
                totalAttempts--;
            }
        }
        console.log(totalAttempts);
    }

    alert(answerArray.join(' '));
    alert('Good job! The word was "' + word + '"');
}, 1500);