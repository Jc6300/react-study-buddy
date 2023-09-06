import { useState } from "react";
import { nanoid } from "nanoid";
// import reactLogo from "./assets/react.svg";

// import "./App.css";
function App() {
	const [flashCard, setFlashCard] = useState({
		question: "What is react?",
		choices: ["A Javascript framework", "A Javascript library"],
		answer: "A Javascript library",
		explanation: `It's absolutely crucial that if you ever hear anyone have the audacity to call it a framework, you must correct them as pendantically as possible, preferably starting your response with the phrase "um actually..."`,
	});

	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => setIsFlipped(!isFlipped);

	return (
		<div>
			<header>
				<img src="/src/assets/react.svg" />
				<h1>React Study Buddy</h1>
			</header>

			<div
				className={`flash-card ${isFlipped ? "flipped" : ""}`}
				onClick={handleClick}
			>
				<div className="flash-card-inner">
					<div className="flash-card-front">
						<p className="question">{flashCard.question}</p>
						<ol type="a">
							{flashCard.choices.map((choice) => (
								<li key={nanoid()}>{choice}</li>
							))}
						</ol>
					</div>
					<div className="flash-card-back">
						<p className="answer">{flashCard.answer}</p>
						<p>{flashCard.explanation}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
