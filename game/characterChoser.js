STAY_DOWN.states.chooser = (function () {
  const {
    displayCH,
    display,
    states,
    changeState,
    image,
    constructors: { GameState, player },
  } = STAY_DOWN;
  const renderer = STAY_DOWN.getRenderer();
  const WorldWidth = 1400;
  const WorldHeight = 740;
  const alessiaOne = document.createElement("button");
  alessiaOne.setAttribute("class", "player1");
  alessiaOne.setAttribute("href", "player1");
  alessiaOne.innerText = "Player 1";
  const alessiaTwo = document.createElement("button");
  alessiaTwo.setAttribute("class", "player2");
  alessiaTwo.setAttribute("href", "player2");
  alessiaTwo.innerText = "Player 2";
  var Index = 0;
  var player2 = new player(100, 100);
  function activate() {
    document.body.appendChild(alessiaOne);
    document.body.appendChild(alessiaTwo);
    alessiaOne.addEventListener("click", checkPlayer);
    alessiaTwo.addEventListener("click", checkPlayer);
    window.addEventListener("resize", resize);
    resize();
  }
  function deactivate() {
    window.removeEventListener("resize", resize);
  }
  function resize() {
    const rect = display.canvas.getBoundingClientRect();
    var leftOne = rect.left + 100;
    var topOne = rect.top + 50;
    var leftTwo = rect.left + WorldWidth - 300;
    alessiaTwo.style.left = leftOne + "px";
    alessiaTwo.style.top = topOne + "px";
    alessiaOne.style.left = leftTwo + "px";
    alessiaOne.style.top = topOne + "px";
  }
  function checkPlayer(e){
    if(e.target.classList.contains("player1"))
      {
        setTimeout(()=>{changeState(states.run)
        displayCH.canvas.setAttribute("class", "deactivate")}, 2000)
        

      }
  }
  function update() {
    player2.changeFrame(image.frameSetStand[0], 5);
    Index = player2.updateFrame();
  }
  function render() {
    displayCH.fillStyle = "#6e4fa3";
    displayCH.fillRect(0, 0, WorldWidth, WorldHeight);
    renderer.drawImage1(image.optionOne, 50, 100, Index);
    renderer.drawImage1(image.optionTwo, WorldWidth - 350, 100, Index);
  }

  displayCH.canvas.width = WorldWidth;
  displayCH.canvas.height = WorldHeight;

  return new GameState(update, render, activate, deactivate);
})();
