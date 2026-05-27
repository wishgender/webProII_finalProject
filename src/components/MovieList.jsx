//= laz r
//= 05-26-2026 17:10
//= MovieList.jsx

//= Dependencies =//
import SingleMovie from "./SingleMovie.jsx";

const MovieList = (props) => {
    return (
        <>
            <h2 className="title">Browse</h2>
            <ul className="columns is-multiline">
                {props.data.map((m, i) => <SingleMovie movie={m} key={i} add={props.add} remove={props.remove} check={props.check} />)}
            </ul>
        </>
    )
}

export default MovieList;