//= laz r
//= 05-26-2026 17:10
//= SingleMovie.jsx

//= Dependencies =//
import { useEffect, useState } from 'react';

const SingleMovie = (props) => {
    const [isAFavorite, setIsAFavorite] = useState(false);

    useEffect(() => {
        setIsAFavorite(props.check(props.movie.id));
    });

    const handleClick = (e) => {
        if (isAFavorite) {
            props.remove(props.movie.id);
        }
        props.add(props.movie.id);
    }

    return (
        <li className="column is-one-fifth-desktop">
            <div className="card">
                <div className='card-image'>
                    <figure className="image is-2by3">
                        <img src={`https://image.tmdb.org/t/p/w342/${props.movie.poster}`} alt={props.movie.title} />
                    </figure>
                </div>
                <div className="card-content has-text-centered content-rectangle">
                    <h2 className="title is-5">{props.movie.title}</h2>
                    <p className="is-size-7">{props.movie.description}</p>
                </div>
                <footer className='card-footer'>
                    <button
                        className={isAFavorite ? `button card-footer-item heartButton fave` : `button card-footer-item heartButton`}
                        onClick={handleClick}>
                        <svg className="w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
                        </svg>
                    </button>
                </footer>
            </div>
        </li>
    )
}

export default SingleMovie;