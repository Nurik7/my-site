function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
};

function getDistance(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
function getDistanceHint(distance) {
    if (distance < 30) {
        return 'Очень горячооо!';
    } else if (distance < 50) {
        return 'Ты очень и очень близок!';
    } else if (distance < 80) {
        return 'Довольно близко. Ищи где-то там!';
    } else if (distance < 120) {
        return 'Тепло';
    } else if (distance < 250) {
        return 'Холодно';
    } else if (distance < 500) {
        return 'Оооочень холодно';
    } else {
        return 'Братан, ну нет, это точно не здесь. Поищи в другом месте';
    };
};

var width = 1300;
var height = 929;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};



$('#map').click(function (event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    $('#clicks-left').text('Ты прокликал ' + clicks + ' раз.')
    if (distance < 15) {
        window.alert('Поздравляю! Ты нашел спрятанное сокровище. Для этого тебе потребовалось ' + clicks + ' кликов!');
    } else if (clicks > 49) {
        window.alert('Ох, пираты схватили тебя первее, чем ты смог найти клад! Ты проиграл')
    };
});
