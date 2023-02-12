import "./post.scss";

import dot from "../../assets/dot.png";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/comment.png";
import Send from "../../assets/send.png";
import Comments from "../comments/Comment"



import { useState  } from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
  
  //  TEMPORARY
    const liked = false;
  
    return (
      <div className="post">
      <div className="container3">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <img src={dot} width="20px" height={"20px"} />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ?   <img src={Heart} width="20px" height={"20px"} /> :   <img src={Heart} width="20px" height={"20px"} />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <img src={Comment} width="20px" height={"20px"} />
            12 Comments
          </div>
          <div className="item">
          <img src={Send} width="20px" height={"20px"} />
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
    );
  };
  
  export default Post;