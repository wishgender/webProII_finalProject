//= laz r
//= 05-26-2026 17:10
//= SingleFavorite.jsx

const SingleFavorite = (props) => {

    const handleClick = (e) => {
        props.update(props.movie.id);
    }

    return (
        <div className="column is-1">
            <img src={`https://image.tmdb.org/t/p/w92/${props.movie.poster}`} />
            <div className='has-text-centered'>
                <button className="crossButton" onClick={handleClick} >
                    {/* <img src={crossIcon} className="w-5" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path d="M0 0h16v16H0z" fill="none" />
                        <path fill="currentColor"
                            d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SingleFavorite;