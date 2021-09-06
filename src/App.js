import React, {useState} from 'react'
import ourTeamData from "./ourTeamData"
import {Cards} from "./Cards"

const App = () => {
  const [cardData, setCardData] = useState(ourTeamData)
  const [currentCard, setCurrentCard] = useState(0)

  // const previousCard = _ => {
  //   if(currentCard <= 0 ) {
  //     setCurrentCard(cardData.length - 1)
  //   } else {
  //     setCurrentCard(currentCard - 1)
  //   }
  // }

  // const nextCard = _ => {
  //   if(currentCard >= cardData.length - 1) {
  //     setCurrentCard(0)
  //   } else {
  //     setCurrentCard(currentCard + 1)
  //   }
  // }



  const checkNumber = number => {
    if(number > cardData.length - 1) {
      return 0;
    }

    if(number < 0 ) {
      return cardData.length - 1;
    }

    return number;
  }



  const prevCard = () => {
    setCurrentCard((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }



  const nextCard = () => {
    setCurrentCard((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }



  const randomCard = _ => {
    let randomNumber = Math.floor(Math.random() * cardData.length)
    if(randomNumber === currentCard) {
      randomNumber = currentCard + 1;
    }

    setCurrentCard(checkNumber(randomNumber))
  }



  return (
    <div className="container">
      <h1 className="heading">Meet Our Team</h1>
      <div className="team-card--container">
          <Cards currentCard={currentCard} cardData={cardData}/>
        <div className="carousel-btn-container">
          <div className="carousel-btns">
            <button className="prev-btn" onClick={() => prevCard()}>Prev</button>
            <button className="next-btn" onClick={() => nextCard()}>Next</button>
          </div>
            <button className="suprise-me-btn" onClick={() => randomCard()}>Suprise Me</button>
        </div>
      </div>
    </div>
  )
}

export default App
