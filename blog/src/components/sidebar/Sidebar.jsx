import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src="https://images.pexels.com/photos/157040/pexels-photo-157040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facere doloremque commodi hic pariatur quos mollitia, nostrum blanditiis? 
                    Odit, nulla qui? Iusto molestias obcaecati sapiente aperiam nesciunt, 
                    voluptatum eaque animi magnam?
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>

            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>

            </div>
        </div>
    )
}
