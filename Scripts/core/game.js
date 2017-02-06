/* Core game script */
/// <reference path="../core/_reference.ts"/>
//IIFE - Immediately Invoked Function Expression
(function () {
    console.log("App Started");
    //createjs variables
    var canvas;
    var stage;
    //Game variables
    var helloLabel;
    function Start() {
        canvas = document.getElementById("canvas"); //get ref to canvas element 
        stage = new createjs.Stage(canvas); // creating a new stage object
        createjs.Ticker.framerate = 60; //set FPS to 60
        createjs.Ticker.on("tick", Update); //calls the update function every framerate
        Game();
    }
    function Update(event) {
        helloLabel.rotation += 5; //rotate 5 degs every frame
        stage.update(); //manually redraws the stage
    }
    function Game() {
        console.log("Game has started...");
        helloLabel = new objects.Label("Hello, World!", "40px Consolas", "#000000", true, 160, 240);
        stage.addChild(helloLabel);
    }
    window.onload = Start; //calls the start function when the windows finishes loading
})();
//# sourceMappingURL=game.js.map