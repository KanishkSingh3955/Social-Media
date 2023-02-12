import Posts from "../../components/posts/Posts"
import "./profile.scss";
import dot from "../../assets/dot.png";
import Heart from "../../assets/heart.png";
import Comment from "../../assets/comment.png";
import Send from "../../assets/send.png";
import home from "../../assets/home.png";





const Profile = () => {
    return (
      <div className="profile">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="cover"
          />
          <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="profilePic"
          />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <a href="http://facebook.com">
                <img src={dot} width={"20px"} height="20px" />
              </a>
              <a href="http://facebook.com">
              <img src={Heart} width={"20px"} height="20px" />

              </a>
              <a href="http://facebook.com">
              <img src={Comment} width={"20px"} height="20px" />

              </a>
              <a href="http://facebook.com">
              <img src={Send} width={"20px"} height="20px" />

              </a>
            
            </div>
            <div className="center">
              <span>Kanishk singh</span>
              <div className="info">
                <div className="item">
                <img src={home} width={"20px"} height="20px" />

                  <span>India</span>
                </div>
                <div className="item">
                <img src={home} width={"20px"} height="20px" />

                  <span>Kanishk.dev</span>
                </div>
              </div>
              <button>follow</button>
            </div>
            <div className="right">
            <img src={home} width={"20px"} height="20px" />
            <img src={home} width={"20px"} height="20px" />

            </div>
          </div>
        <Posts/>
        </div>
      </div>
    );
  };
  
  export default Profile;