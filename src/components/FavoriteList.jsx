//= laz r
//= 05-26-2026 17:10
//= FavoriteList.jsx

//= Dependencies =//
import { useEffect, useState } from "react";
import SingleFavorite from "./SingleFavorite.jsx";

const FavoriteList = (props) => {
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (props.data.length > 0) {
            setIsEmpty(false);
        }
        else setIsEmpty(true);
    })

    return (
        <>
            {
                isEmpty ? "" : <h1 className="title is-4">Favorites</h1>
            }
            <div className="columns is-multiline">
                {props.data.map((m, i) => <SingleFavorite movie={m} key={i} update={props.update} />)}
            </div>
        </>
    )
}

export default FavoriteList;