//= laz r
//= 05-26-2026 17:10
//= Header.jsx

//= Dependencies =//
import FavoriteList from "./FavoriteList.jsx";

const Header = (props) => {
    return (
        <section className="favorites">
            <FavoriteList data={props.data} update={props.update} />
        </section>
    )
}

export default Header;