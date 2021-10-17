import React from "react";

function About() {
	return (
		<div className="about">
			<div class="container">
				<div class="row align-items-center my-5">
					<h1 class="text-center display-5 py-1">About us</h1>
					<p>
						Chikara Coding is a team of students from San Jose State University.
						We are committed to help improve our community through research and
						coding. Together, we hope to come up with creative solutions to
						solve problems that our city or local areas might be facing. This
						website was created for SCEHacks 2021 | Code for California. The
						purpose of this website is to raise awareness about traffic
						congestion issues in the state of California and to demonstrate the
						benefits of commuting through carpooling or public transportation
						instead of driving solo. This website was created using React.js and
						Bootstrap. The game was created using Unity.
					</p>
					<h1 class="text-center display-6 py-3">Meet our team!</h1>
					<div class="col align-self-start">
						<img
							class="img-fluid rounded mb-4 mb-lg"
							src="https://cdn.discordapp.com/attachments/837109337621135383/899143431102816286/profile.jpg"
							alt=""
						/>
					</div>
					<div class="col align-self-start ">
						<h3 class="font-weight-light">Benjamin Wu</h3>
						<p>
							Junior majoring in Computer Science
							<br></br>
							<br></br>
							Website design
							<br></br>
							<br></br>
							<i>
								This is my first hackathon and I would never have thought I
								would build a website from scratch. I definitely learned a lot
								about working with ReactJS and Bootstrap, and I hope this
								website helps people learn about traffic issues!"
							</i>
						</p>
					</div>
					<div class="col align-self-start">
						<img
							class="img-fluid rounded mb-4 mb-lg-0"
							src="https://cdn.discordapp.com/attachments/898616991852687360/899152721993687070/20211016_210913_2.jpg"
							alt=""
						/>
					</div>
					<div class="col align-self-start">
						<h3 class="font-weight-light">Bhargavi Datye</h3>
						<p>
							Junior double majoring in Computer Engineering and Japanese
							<br></br>
							<br></br>
							Website content researcher and writer
							<br></br>
							<br></br>
							<i>
								“This was my first time participating in a hackathon and working
								on a website. Working on this project was a great learning
								experience, and I’m happy to have found such a helpful and
								supportive team. I hope we can develop this website more and
								raise awareness about California’s traffic issues!”
							</i>
						</p>
					</div>
				</div>
				<div class="row align-items-center my-5">
					<div class="col align-self-start">
						<img
							class="img-fluid rounded mb-4 mb-lg-0"
							src="https://cdn.discordapp.com/attachments/898616991852687360/899142772886478899/picture_website.png"
							alt=""
						/>
					</div>
					<div class="col align-self-start">
						<h3 class="font-weight-light">Lauren Macpherson</h3>
						<p>
							Senior majoring in Software Engineering
							<br></br>
							<br></br>
							Game maps development, movement scripting
							<br></br>
							<br></br>
							<i>
								“This project was my first game, and it was a great experience
								learning how to build something on the fly with tools and
								languages I’ve never used before. I’d love to launch our website
								and game in the future once we’ve gotten a chance to build it to
								its full potential.”
							</i>
						</p>
					</div>
					<div class="col align-self-start">
						<img
							class="img-fluid rounded mb-4 mb-lg-0"
							src="https://cdn.discordapp.com/attachments/898616991852687360/899183324319334440/temp.jpg"
							alt=""
						/>
					</div>
					<div class="col align-self-start">
						<h3 class="font-weight-light">William Ngo</h3>
						<p>Freshman majoring in Computer Science</p>
						Game development, backend
						<br></br>
						<br></br>
						<i>
							"I have never worked on a project of such magnitude before, but
							this hackathon was an experience I will never regret. I got to
							meet new people, learn how to develop a game using Unity (C#),
							navigate through GitHub, and most importantly had lots of fun!"
						</i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
