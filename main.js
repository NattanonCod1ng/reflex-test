const playArea = document.getElementById("reactionTest");
const displayText = document.getElementById("gameText");

let time;
let speedClick;
let status = 0;

let bestScore = [];

play = () => {
    time = Math.floor(Math.random() * (8000 - 4000) + 4000);
    console.log(time);
    playArea.style.backgroundColor = "rgba(207, 5, 5, 0.705)";
    displayText.innerHTML = "Wait for Orange...";
    status = 1;

    timer = setTimeout(() => {
        speedClick = Date.now();
        status = 2;
        playArea.style.backgroundColor = 'orange';
        displayText.innerHTML = "Now!";
    }, time);

}

playArea.addEventListener ("click", () => {
    if (status === 2) {
        let score = Date.now() - speedClick;
        status = 0;
        bestScore.push(score);
        console.log(bestScore);
        displayText.innerHTML = `Your reaction time was ${score} ms<br>
        Click to play again<br>
        Your best time was ${Math.min.apply(Math, bestScore)} ms`;
    }

    else if (status === 1) {
       displayText.innerHTML = `Too soon. Try Again`;
       status = 0;
       clearTimeout(timer);
    }

    else if (status === 0){
        play();
    }
});

