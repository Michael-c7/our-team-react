import React, {useState, useEffect} from 'react'
import ourTeamData from "./ourTeamData"
import {Cards} from "./Cards"

const App = () => {
  const [cardData, setCardData] = useState(ourTeamData)
  const [currentCard, setCurrentCard] = useState(0)

  const decreaseAmt = _ => {
    if(currentCard <= 0 ) {
      setCurrentCard(cardData.length - 1)
    } else {
      setCurrentCard(currentCard - 1)
    }
  }

  const increaseAmt = _ => {
    if(currentCard >= cardData.length - 1) {
      setCurrentCard(0)
    } else {
      setCurrentCard(currentCard + 1)
    }
  }

  return (
    <div className="container">
      <h1 className="heading">Meet Our Team</h1>
      <div className="team-card--container">
          <Cards currentCard={currentCard} cardData={cardData}/>
        <div className="carousel-btn-container">
          <div className="carousel-btns">
            <button className="prev-btn" onClick={() => decreaseAmt()}>Prev</button>
            <button className="next-btn" onClick={() => increaseAmt()}>Next</button>
          </div>
            <button className="suprise-me-btn" onClick={() => setCurrentCard(Math.floor(Math.random() * cardData.length))}>Suprise Me</button>
        </div>
      </div>
    </div>
  )
}

export default App
