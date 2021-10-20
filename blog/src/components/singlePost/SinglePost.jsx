import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                className="singlePostImg"
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Erick</b>
                    </span>

                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>

                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi tenetur est vitae laborum at voluptas, natus quibusdam, 
                    temporibus nulla vel, provident sapiente tempora aliquam ipsam cumque animi quam. 
                    Excepturi, aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi tenetur est vitae laborum at voluptas, natus quibusdam, 
                    temporibus nulla vel, provident sapiente tempora aliquam ipsam cumque animi quam. 
                    Excepturi, aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi tenetur est vitae laborum at voluptas, natus quibusdam, 
                    temporibus nulla vel, provident sapiente tempora aliquam ipsam cumque animi quam. 
                    Excepturi, aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi tenetur est vitae laborum at voluptas, natus quibusdam, 
                    temporibus nulla vel, provident sapiente tempora aliquam ipsam cumque animi quam. 
                    Excepturi, aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi tenetur est vitae laborum at voluptas, natus quibusdam, 
                    temporibus nulla vel, provident sapiente tempora aliquam ipsam cumque animi quam. 
                    Excepturi, aspernatur!
                </p>
            </div>
            
        </div>
    )
}
