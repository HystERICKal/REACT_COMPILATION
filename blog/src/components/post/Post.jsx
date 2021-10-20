import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae quae at illo voluptates reiciendis soluta incidunt facere laborum, sequi fuga. 
                Nam praesentium, in corporis doloremque ea tempora ab nesciunt sequi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae quae at illo voluptates reiciendis soluta incidunt facere laborum, sequi fuga. 
                Nam praesentium, in corporis doloremque ea tempora ab nesciunt sequi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae quae at illo voluptates reiciendis soluta incidunt facere laborum, sequi fuga. 
                Nam praesentium, in corporis doloremque ea tempora ab nesciunt sequi!
            </p>
        </div>
    )
}
