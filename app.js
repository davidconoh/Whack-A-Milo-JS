document.querySelector(".playBtn").onclick = function(){
    const grid = document.querySelector(".grid");
    this.classList.add('none');


    document.querySelector('.overlay').style.background = `#D5E1B3`;
    document.querySelector('.title').style.color = `black`;


    document.querySelector('.countDown').classList.remove('none');
    document.querySelector(".scoreBoard").classList.remove('none');




    var gridSquare = document.querySelector('.gridSquare');

    function createBoard(){
        for(i = 0; i < 9; i++){
            var card = document.createElement('div');
            card.setAttribute('class', 'square');
            card.setAttribute('id', i);
            gridSquare.appendChild(card);
        };
    };

    createBoard();


    //CountDown & Score
    var count = 60;
    function countDown(){
        count -= 1;
        document.querySelector('.count').textContent = count;
    };


    // Count Down
    var seconds  = 1000;
    while(seconds != 61000){
        setTimeout(countDown, seconds);
        setTimeout(randomImage, seconds);
        seconds += 1000;
    };

    


    var score = 0;
    function randomImage(){
        var image = Math.floor(Math.random() * 8);
        var miloImg = document.createElement('img');
        miloImg.setAttribute('class', 'milo');
        miloImg.src = `milo.png`;
        document.getElementById(image).appendChild(miloImg);

        miloImg.addEventListener('click', function(){
            score = score + 1;
            console.log(score);
            document.querySelector('.score').textContent = score;
        });

        function blankImg(){
            miloImg.remove();
        };

        setTimeout(blankImg,600);
    };











    


};






