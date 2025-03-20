import './TitleCards.css';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TitleCards = ({ category, title }) => {
    const cardRef = useRef();
    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQ3OWFkOWExNTI1ZGI5OTc4OTM0YjJkNDRhNDU4OCIsIm5iZiI6MTczOTI1MjgyMC4xOTkwMDAxLCJzdWIiOiI2N2FhZTQ1NDdjOTkxMDgxNGY5Yjk5M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YP_CiUIdWP3SqLoIeH-7eaf7nC_deSIZh3789juNokQ'
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
                options
            );
            const data = await response.json();
            setApiData(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const wheelHandler = (event) => {
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaX;
    };

    useEffect(() => {
        const currentRef = cardRef.current;
        currentRef.addEventListener("wheel", wheelHandler);
        fetchData();

        return () => {
            currentRef.removeEventListener("wheel", wheelHandler);
        };
    }, [category]);

    return (
        <div className='title-cards'>
            <h2>{title || "Popular on Netflix"}</h2>
            <div className='card-list' ref={cardRef}>
                {apiData.map((card, index) => (
                    <Link to={`/player/${card.id}`} key={index} className='card'>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                            alt={card.backdrop_path || 'movie image'}
                        />
                        <p>{card.original_title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TitleCards;
