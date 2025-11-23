import { useCallback, useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent from "../components/Map";

const Post = () => {
  const [mode, setMode] = useState(null);
  const [post, setPost] = useState(null);

  const { id } = useParams();
  const Navigate = useNavigate();
  
  const url = process.env.REACT_APP_API_BASE_URL;
  const baseUrl = url.replace('/posts', '');
    console.log(url, baseUrl)

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const deletePost = async () => {
    const response = await axios.delete(`${baseUrl}/delete/${id}`);
    const success = response.status === 200;
    if (success) {
      Navigate("/");
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="post-page">
      <div className="post-page-container">
        <div className="info-container">
          <div className="title-container">
            <h1>{post?.data.title}</h1>
            <h4>{post?.data.description}</h4>
            <p>
              {post?.data.address.region}, {post?.data.address.country},{" "}
              {post?.data.website}
            </p>
          </div>
          <div className="button-container">
            <button onClick={deletePost}>X</button>
            <button onClick={() => setMode("edit")}>✎</button>
          </div>
        </div>
        <div className="image-container">
          {/* <Map /> */}
          <MapComponent coords={post?.data.address.coords} />
          <img
            className="post-img"
            src={post?.data.photo}
            alt={post?.data.title}
          />
        </div>
        {mode && (
          <Modal
            mode={mode}
            setMode={setMode}
            currentPost={post}
            fetchData={fetchData}
          />
        )}
      </div>
    </div>
  );
};
export default Post;


