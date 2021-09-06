export const Cards = (props) => {
    const {cardData, currentCard} = props;
    return (
        <ul className="team-cards">
            {cardData.map((card, index) => {
                const {id, fullName, image, job, text} = card;
                /*Could also get the current card (that we want to display) w/
                    const {id, fullName, image, job, text} = card[currentCard];
                */
                if(index === currentCard) {
                    return (
                        <li key={id} className="team-card show-card">
                            <img src={image} alt={fullName} />
                            <header className="team-card__header">
                                <h2>{fullName}</h2>
                                <h3>{job}</h3>
                            </header>
                            <p>{text}</p>
                        </li>
                    )
                }

                return (
                    <li key={id} className="team-card">
                        <img src={image} alt={fullName} />
                        <header className="team-card__header">
                            <h2>{fullName}</h2>
                            <h3>{job}</h3>
                        </header>
                        <p>{text}</p>
                    </li>
                )
            })}
        </ul>
    )
}