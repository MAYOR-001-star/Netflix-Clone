import backarrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Player.css'


const Player = () => {
    const {id} = useParams()
    console.log(id);
    const navigate = useNavigate()

    const[apiData, setApiData] = useState({
        published_at: '',
        name: '',
        typeof: '',
        key: ''
    });

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQ3OWFkOWExNTI1ZGI5OTc4OTM0YjJkNDRhNDU4OCIsIm5iZiI6MTczOTI1MjgyMC4xOTkwMDAxLCJzdWIiOiI2N2FhZTQ1NDdjOTkxMDgxNGY5Yjk5M2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YP_CiUIdWP3SqLoIeH-7eaf7nC_deSIZh3789juNokQ'
        }
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    },[]);

    return (
        <div className='player'>
            <img src={backarrow} alt='back_to_homePage' onClick={() => navigate(-2)}/>
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player
