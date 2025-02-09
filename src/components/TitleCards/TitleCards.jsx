import './TitleCards.css';
import cards from '../../assets/cards/Cards_data';
import { useRef, useEffect } from 'react';

const TitleCards = ({title, category}) => {
    const cardRef = useRef();

    const wheelHandler = (event) => {
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaX;
    };

    useEffect(() => {
        cardRef.current.addEventListener("wheel", wheelHandler);
    }, []);

    return (
        <div className='title-cards'>
            <h2>{title? title : "Popular on Netflix"}</h2>
            <div className='card-list' ref={cardRef}>
                {cards.map((card, index) => (
                    <div key={index} className='card'>
                        <img src={card.image} alt='movie-image' />
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleCards;
