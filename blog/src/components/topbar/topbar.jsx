import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
    const user = false
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {/* If there is a user, write "LOGOUT" */}
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className="topImg"
                        src="https://yt3.ggpht.com/yti/APfAmoGvEo22FQD4LQ4WIAehKzY8V8VdgHLMOOs0QZ6gWA=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>


                    </ul>
                )}


                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
