"use client";

import { WalletConnect } from "@/components/Wallet-connect";
import { useState, useEffect } from "react";
import { useContract } from "@/hooks/useContract";
import SampleIntegration from "@/components/sample";
import { champions, Champion } from "@/lib/champions";
import Image from 'next/image';

const LATEST_LOL_VERSION = "14.9.1";

export default function Home() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [score, setScore] = useState(0);
	const [heroToGuess, setHeroToGuess] = useState<Champion | null>(null);
	const [userGuess, setUserGuess] = useState("");
	const [message, setMessage] = useState("Press 'Start Game' to begin!");
	const [shuffledChampions, setShuffledChampions] = useState<Champion[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const { data, actions, state } = useContract();
const { setValue } = actions;
const { isPending, isConfirming, isConfirmed, error } = state;

	// Shuffle champions on initial load
	useEffect(() => {
		setShuffledChampions([...champions].sort(() => Math.random() - 0.5));
	}, []);

	const startGame = () => {
		setIsPlaying(true);
		setScore(0);
		setUserGuess("");
		setCurrentIndex(0);
		setHeroToGuess(shuffledChampions[0]);
		setMessage("Which champion is this?");
	};

	const setNextHero = () => {
		const nextIndex = currentIndex + 1;
		if (nextIndex >= shuffledChampions.length) {
			// End of the list, stop the game
			stopGame(true); // pass a flag to indicate it's a win/completion
		} else {
			setCurrentIndex(nextIndex);
			setHeroToGuess(shuffledChampions[nextIndex]);
		}
	};

	const handleGuess = () => {
		if (!userGuess || !heroToGuess) return;

		if (userGuess.toLowerCase() === heroToGuess.name.toLowerCase()) {
			setScore(score + 1);
			setMessage(`Correct! It was ${heroToGuess.name}. Next one!`);
		} else {
			setMessage(`Wrong! That was ${heroToGuess.name}. Try this one!`);
		}
		setUserGuess("");
		setNextHero();
	};

	const stopGame = async (completed = false) => {
		setIsPlaying(false);
		const finalMessage = completed 
			? `Congratulations! You've guessed all champions! Your final score is ${score}.`
			: `Game over! Your final score is ${score}.`;

		setMessage(`${finalMessage} Saving score to the contract...`);
		
		try {
			await setValue(score);
			setMessage(`${finalMessage} Score saved successfully!`);
		} catch (e) {
			console.error("Failed to set value on contract", e);
			setMessage("Could not save your score. See console for details.");
		}
	};

	return (
		<div className="container">
			<header className="header">
				<h1>Champion Guessing Game</h1>
				<WalletConnect />
			</header>
			
			<main className="main-content">
				<div className="game-card">
					{!isPlaying ? (
						<div className="game-intro">
							<h2>Welcome!</h2>
							<p className="message">{message}</p>
							<button onClick={startGame} className="btn btn-start">
								Start Game
							</button>
						</div>
					) : (
						<div className="game-active">
							{/* Ensure heroToGuess is not null before rendering */}
							{heroToGuess ? (
								<>
									<div className="champion-image-container">
										<Image
											src={heroToGuess.imageUrl}
											alt="Guess the champion"
											width={300}
											height={300}
											className="champion-image"
											priority
										/>
									</div>
									<h2 className="score">Score: {score}</h2>
									<p className="message">{message}</p>
									
									<div className="input-group">
										<input
											type="text"
											value={userGuess}
											onChange={(e) => setUserGuess(e.target.value)}
											onKeyPress={(e) => e.key === "Enter" && handleGuess()}
											className="guess-input"
											placeholder="Enter champion name..."
										/>
										<button onClick={handleGuess} className="btn btn-guess">
											Guess
										</button>
									</div>
									
									<button onClick={() => stopGame(false)} className="btn btn-stop" disabled={isPending || isConfirming}>
										{isPending || isConfirming ? "Saving..." : "Stop Game"}
									</button>
								</>
							) : (
								<p>Loading champion...</p>
							)}
						</div>
					)}
				</div>
				
				<div className="contract-status">
					<div style={{ margin: "1rem 0" }}>
						<SampleIntegration />
					</div>
					{isPending && <p>Transaction is pending...</p>}
					{isConfirming && <p>Transaction is confirming...</p>}
					{isConfirmed && <p>Transaction confirmed!</p>}
					{error && <p className="error-message">Error: {error}</p>}
				</div>
			</main>
		</div>
	);
}
