import React from "react";

function Game() {
	return (
		<div className="game">
			<div class="container">
				<div class="row align-items-cente p-5">
					<iframe
						src="https://i.simmer.io/@Xenolht/cali-jam"
						height="750"
						width="960"
					></iframe>
				</div>
				<h1 class="text-center display-5">Welcome to Cali-Jam!</h1>
				<p class="lead text-center">
					Controls:
					<br></br>W or Up: Move up <br></br>A or Left: Move left <br></br>S or
					Down: Move down <br></br>D or Right: Move right
				</p>
			</div>
		</div>
	);
}

export default Game;
