import { Link } from 'react-router-dom';

const CardMovie = ({id, title, imgLink, rating, releaseDate}) => {
    return (
     
          <Link to={`/movie/${id}`} className="card">
          
           <div className="card__img">
                <img src={imgLink} alt="card img" />
            </div>
            <div className="card__content">
                <h2>{title}</h2>
                <span className='release-date'>{releaseDate}</span>
                <span className='rating'>{rating}</span>
            </div>

          
        </Link>
     
    );
}

export default CardMovie;
