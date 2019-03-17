;(function(){

	var Game = function(canvasId) {
		var canvas = document.getElementById(canvasId);
		var screen = canvas.getContext("2d");
		var gameSize = {
			x: canvas.width,
			y: canvas.height			
		};

		var self = this;
		var gameCycle = function() {
			self.update();
			self.draw(screen, gameSize);
			requestAnimationFrame(tick);
		}

		gameCycle();
	}

	Game.prototype = {

		update: function() {
			console.log("update");
		},

		draw: function(screen, gameSize) {
			//test render
			screen.fillRect(150, 150, 32, 32);
		}

	}

	window.omload = function() {
		new Game("screen");
	}

})();
