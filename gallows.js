window.addEventListener('load', function() {
    let strWithLetter = 'йцукенгшщзхъфывапролджэячсмитьбю',
        arrWithLetter = strWithLetter.split(''),
        arrWithWord,
        arrForSplit,
        counterWithTry,
        number,
        hint,
        keyWithLetter;
    createKeyboard();
    startGame();
    
    function createKeyboard(){
        for(let elem of arrWithLetter){
            $('.container').append('<div class="shadow" name="' + elem + '">' + elem + '<div>');
        }
    }
    function pressButton(event){
        keyWithLetter = event.key
        $('.container > div').filter(function(){
            if($(this).attr('name') == event.key.toLowerCase()){
                if(event.type == 'keydown'){
                    document.removeEventListener('keydown', pressButton);
                    $(this).removeClass('shadow').addClass('insetshadow');
                } else {
                    document.addEventListener('keydown', pressButton);
                    $(this).removeClass('insetshadow').addClass('shadow');
                    checkAnswer(keyWithLetter);
                }
            }
        })
    }   
    function startGame() {
        document.addEventListener('keydown', pressButton);
        document.addEventListener('keyup', pressButton);
        counterWithTry = 6;
        clear();
        createFieldWithTry(counterWithTry);
        arrWithWord = ['бумага', 'подарок', 'путешествие', 'счет', 'торт', 'велосипед', 'радуга', 'ромашка', 'пират', 'стадион', 'писатель', 'автобус', 'спорт', 'учительница', 'фломастер', 'успех', 'сокровище', 'школа', 'фабрика', 'компьютер', 'метрополитен', 'принтер', 'кутикула', 'инспектор', 'кастрюля', 'ворон', 'диско', 'иголка', 'сено', 'масло', 'тетраэдр', 'онкология', 'приют', 'зверинец', 'питомник', 'механизм', 'сухарики', 'блюдце', 'папирус', 'футбол', 'эколог'];
        number = arrWithWord.length;
        hint = arrWithWord[random(number)];
        console.log(hint)
        arrForSplit = hint.split('');
        fielWithWord(hint);
    }
    function fielWithWord(str) {
        $('.word > p').html('');
        $('.word > p').html(function (){
            for(let elem of str){
                if(elem == ' '){
                    this.innerHTML += '<span>&emsp;</span>';
                } else {
                    this.innerHTML += '<span>_</span> ';
                }
            }
        })
    }
    function createFieldWithTry(number){
        $('.try').append('<div class="withTry"></div>');
        for(let i = number; i >= 0; i--){
            $('.withTry').append(`<div>${i}</div>` )
        }
    }
    function checkAnswer(key){
        let counterForWord = 0,
            counterForEmptySpan = 0;
        for(let [keys, elem] of arrForSplit.entries()){
                if(key == elem.toLowerCase()){
                    $('span')[keys].innerHTML = elem;
                    counterForWord++;
                }  
        }
        $('.word > p > span').each(function(){
            if(/^_$/.test($(this).html())){
                counterForEmptySpan++;
            }
        });
            if(counterForWord == 0 && checkLetter(key)){
                wrongLetter();
            }
            if(counterForEmptySpan == 0){
                endGame();
            }
        }
    function random(num){
        return Math.floor(Math.random() * num);
    }
    function wrongLetter(){
        counterWithTry--;
        $('.fieldWithWrong').html(function () {
            return this.innerHTML +=  `${keyWithLetter}, `;
        })
        $('.withTry').animate({marginTop: '-=72'},100);
        canvasDraw();
    }
    function canvasDraw(){
        let canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d');
            switch(counterWithTry){
                case 5:
                    firtsWrongAnswer();
                    break;
                case 4:
                    secondWrongAnswer();
                    break;
                case 3: 
                    thirdWrongAnswer();
                    break;
                case 2: 
                    fourthWrongAnswer();
                    break;
                case 1:
                    fifthWrongAnswer();
                    break;
                case 0: 
                    sixthWrongAnswer();
                    endGame();
                    break;
            }
        function firtsWrongAnswer(){
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d');
            //Отрисовка левой балки висилици НАЧАЛО
            ctx.beginPath();
            ctx.moveTo(108, 94);
            ctx.lineTo(108, 324);
            ctx.lineTo(138, 324);
            ctx.lineTo(138, 94);
            ctx.lineTo(133, 98);
            ctx.lineTo(122, 98);
            ctx.lineTo(117, 92);
            ctx.lineTo(112, 96);
            ctx.closePath();
            ctx.stroke();
            //Отрисовка левой балки висилици КОНЕЦ
            //Отрисовка верхней балки висилици НАЧАЛО
            ctx.beginPath();
            ctx.moveTo(79, 111);
            ctx.lineTo(77, 116);
            ctx.lineTo(90, 118);
            ctx.lineTo(80, 123);
            ctx.lineTo(92, 124);
            ctx.lineTo(75, 131);
            ctx.lineTo(108, 131);
            ctx.moveTo(138, 131);
            ctx.lineTo(358, 131);
            ctx.lineTo(360, 125);
            ctx.lineTo(358, 119);
            ctx.lineTo(360, 111);
            ctx.lineTo(138, 111);
            ctx.moveTo(108, 111);
            ctx.lineTo(79, 111);
            ctx.stroke();
            //Отрисовка верхней балки висилици КОНЕЦ
            //Отрисовка верхней балок между верхней и левой НАЧАЛО
            ctx.beginPath();
            ctx.moveTo(138, 173);
            ctx.lineTo(198, 132);
            ctx.moveTo(138, 185);
            ctx.lineTo(214, 132);
            ctx.stroke();
            //Отрисовка верхней балок между верхней и левой КОНЕЦ
            //Отрисовка украшений НАЧАЛО
            ctx.beginPath();
            ctx.arc(119, 122, 7, 0, toDegrees(360));
            ctx.moveTo(119, 115);
            ctx.lineTo(119, 128);
            ctx.moveTo(111, 122);
            ctx.lineTo(126, 122);
            ctx.moveTo(120, 138);
            ctx.lineTo(123, 168);
            ctx.lineTo(127, 178);
            ctx.arc(107,178, 15, 0, toDegrees(60));
            ctx.lineTo(118, 220)
            ctx.stroke();
            //Отрисовка украшений КОНЕЦ
    }
        function secondWrongAnswer() {
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(75, 324);
            ctx.lineTo(325, 324);
            ctx.lineTo(325, 350);
            ctx.lineTo(75, 350);
            ctx.lineTo(85, 340);
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(180, 323, 20, 0, toDegrees(180), true);
            ctx.arc(180, 323, 27, 0, toDegrees(180), true);
            ctx.stroke();
            ctx.beginPath()
            ctx.moveTo(165, 300);
            ctx.lineTo(145, 270);
            ctx.lineTo(150, 265);
            ctx.lineTo(172, 297);
            ctx.fill();
    }
        function thirdWrongAnswer(){
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d');
            //Отрисовка головы НАЧАЛО
            ctx.beginPath();
            ctx.arc(274, 175, 20, 0, toDegrees(360));
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(264, 174, 5, 0, toDegrees(360));
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(280, 174, 5, 0, toDegrees(360));
            ctx.stroke();
            ctx.beginPath()
            ctx.arc(280, 174, 2, 0, toDegrees(360));
            ctx.fill()
            ctx.beginPath();
            ctx.arc(264, 174, 2, 0, toDegrees(360));
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(264, 186);
            ctx.lineTo(284, 184);
            ctx.stroke(); 
            //Отрисовка головы КОНЕЦ
    }
        function fourthWrongAnswer(){
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d');
            //Отрисовка тела НАЧАЛО
            ctx.moveTo(274, 195);
            ctx.lineTo(274, 245);
            ctx.lineTo(265, 270);
            ctx.moveTo(274, 245);
            ctx.lineTo(285, 270);
            ctx.moveTo(274, 210);
            ctx.lineTo(260, 235);
            ctx.moveTo(274, 210);
            ctx.lineTo(288, 235);
            ctx.stroke();
            //Отрисовка тела КОНЕЦ  
    }
        function fifthWrongAnswer(){
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d');
            //ОТрисовка петли НАЧАЛО
            ctx.beginPath();
            ctx.moveTo(268, 130);
            ctx.lineTo(268, 156);
            ctx.moveTo(275, 130);
            ctx.lineTo(275, 156);
            for(let i = 0; i < 24; i += 4){
                ctx.moveTo(268, 134 + i);
                ctx.lineTo(275, 132 + i);
            }
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(270, 120,10, toDegrees(90), toDegrees(250), false);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(276, 120,10, toDegrees(90), toDegrees(250), false);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(262, 116);
            ctx.lineTo(269, 114);
            ctx.moveTo(260, 120);
            ctx.lineTo(267, 118);
            ctx.moveTo(262, 124);
            ctx.lineTo(267, 122);
            ctx.moveTo(263, 128);
            ctx.lineTo(267, 126);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(273, 180, 20, 0, toDegrees(90));
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(275, 180, 20, toDegrees(90) ,toDegrees(175));
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(260, 192);
            ctx.lineTo(260, 188);
            ctx.moveTo(264, 196);
            ctx.lineTo(264, 192);
            ctx.moveTo(268, 198);
            ctx.lineTo(268, 194);
            ctx.moveTo(280, 198);
            ctx.lineTo(280, 194);
            ctx.moveTo(284, 198);
            ctx.lineTo(284, 193);
            ctx.moveTo(288, 192);
            ctx.lineTo(288, 189);
            ctx.stroke();
            // Отрисовка петли КОНЕЦ
            // Отрисовка стула НАЧАЛО
            ctx.beginPath();
            ctx.fillRect(234,303,80,20);
            ctx.fillStyle = 'brown'
            ctx.fillRect(260,271,30,33);
            // Отрисовка стула КОНЕЦ
    }
        function sixthWrongAnswer() {
            let canvas = document.querySelector('canvas'),
                ctx = canvas.getContext('2d'),
                pixel = 0;
            //Отрисовка ручки переключателя и лица НАЧАЛО
            ctx.clearRect(142,263,66,60);
            ctx.beginPath();
            ctx.arc(180, 323, 20, 0, toDegrees(180), true);
            ctx.arc(180, 323, 27, 0, toDegrees(180), true);
            ctx.stroke();
            ctx.beginPath()
            ctx.moveTo(190, 298);
            ctx.lineTo(227, 290);
            ctx.lineTo(227, 296);
            ctx.lineTo(198, 302);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.clearRect(258,168, 30, 20);
            ctx.moveTo(266,170);
            ctx.lineTo(268, 180);
            ctx.moveTo(262,175);
            ctx.lineTo(272,175);
            ctx.moveTo(277,163);
            ctx.lineTo(279,173);
            ctx.moveTo(273, 168);
            ctx.lineTo(283, 168);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(280, 183, 3, 0, toDegrees(360));
            ctx.stroke();
            //Отрисовка ручки переключателя и лица НАЧАЛО
            //Отрисовка фразы Your loose НАЧАЛО
            ctx.beginPath();
            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('You loose!', 249, 35);
            //Отрисовка фразы Your loose НАЧАЛО
            //Отрисовка Анимации НАЧАЛО
            let animateId = requestAnimationFrame(function animate(){
                ctx.clearRect(259,271,35,pixel);
                if(pixel++ == 32){
                    cancelAnimationFrame(animateId);
                } else {
                    let animateId = requestAnimationFrame(animate)
                }
        })
        //Отрисовка Анимации КОНЕЦ
    }
        function toDegrees(degrees){
    return (Math.PI / 180) * degrees;
} 
    }
    function endGame() {
        document.removeEventListener('keydown', pressButton);
        document.removeEventListener('keyup', pressButton);
        $('.endGame').css('display', 'block')
        $('button').one('click', function tryAgain(){
            startGame();
        })
        for(let [key, value] of arrForSplit.entries()){
            $('span')[key].innerHTML = value;
        }
        if(counterWithTry > 0){
            $('.fieldWithWrong').html('You won!');
        }
    }
    function clear() {
        let canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
        $('.fieldWithWrong').html('');
        $('.withTry').css({marginTop: 0});
        $('.endGame').css({display: 'none'});
    }
    function checkLetter(key){
        let str = $('.fieldWithWrong').html();
        for(let elem of str){
            if(elem == key) return false
        }
        return true;
    }
})