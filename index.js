function diceRoll() {
    var p1Roll = Math.floor(Math.random()*6)+1;
    var p2Roll = Math.floor(Math.random()*6)+1;

    if (p1Roll === 1) {
        document.querySelector(".img1").setAttribute("src", "images/1.png");
    }
    if (p1Roll === 2) {
        document.querySelector(".img1").setAttribute("src", "images/2.png");
    }
    if (p1Roll === 3) {
        document.querySelector(".img1").setAttribute("src", "images/3.png");
    }
    if (p1Roll === 4) {
        document.querySelector(".img1").setAttribute("src", "images/4.png");
    }
    if (p1Roll === 5) {
        document.querySelector(".img1").setAttribute("src", "images/5.png");
    }
    if (p1Roll === 6) {
        document.querySelector(".img1").setAttribute("src", "images/6.png");
    }

    if (p2Roll === 1) {
        document.querySelector(".img2").setAttribute("src", "images/1.png");
    }
    if (p2Roll === 2) {
        document.querySelector(".img2").setAttribute("src", "images/2.png");
    }
    if (p2Roll === 3) {
        document.querySelector(".img2").setAttribute("src", "images/3.png");
    }
    if (p2Roll === 4) {
        document.querySelector(".img2").setAttribute("src", "images/4.png");
    }
    if (p2Roll === 5) {
        document.querySelector(".img2").setAttribute("src", "images/5.png");
    }
    if (p2Roll === 6) {
        document.querySelector(".img2").setAttribute("src", "images/6.png");
    }


    if (p1Roll > p2Roll){
        document.querySelector("h1").textContent = "🚩 Player 1 Wins";
    } else if (p2Roll > p1Roll) {
        document.querySelector("h1").textContent = "Player 2 Wins 🚩";
    } else {
        document.querySelector("h1").textContent = "DRAW";
    }
}
