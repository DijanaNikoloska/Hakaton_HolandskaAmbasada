import React, { useEffect, useState } from "react";
import "./LandingPage.css";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

function LandingPage() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <>
      <div className="LandingImg">
        <div className="LandingText">
          <b>Expand</b> Your Mind, Elevate <b>Your Future</b>
          <div className="ButtonsContainer">
            <div className="LandingButtons">
              <button className="signup-btn">Sign Up for Free</button>
              <button className="getstarted-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="LandingDescriptionContainer">
        <p className="LandingDescription">
          <b>Our platform is based on 3</b> simple <b>tasks:</b>
        </p>
      </div>

      <div className="CardsContainer">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.id} className="Card">
              {card.image && <img src={card.image} alt={card.title} />}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))
        ) : (
          <p>Loading cards...</p>
        )}
      </div>

      <div className="LearningTagContainer">
        <input
          className="LearningTag"
          type="button"
          value="Start Learning today, your first lesson is for free!"
        />
        <button className="unlock-lesson-btn">
          Unlock your first lesson for free
        </button>
      </div>
      <div className="NewSection">
        <div>
          <img
            src="/images/DiscoverWorld.png"
            alt="Learning"
            className="new-section-image"
          />
        </div>
        <div className="new-section-text">
          <h3>Discover a world of learning - No sing up requered</h3>
          <p>
            Get a glimpse of our platform’s features, explore courses, and
            preview real lessons before you enroll. See how you can learn, track
            progress, and earn certificates!
          </p>
          <div className="new-section-buttons">
            <button className="new-btn-1">Learn More</button>
            <button className="new-btn-2">Sign Up Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
