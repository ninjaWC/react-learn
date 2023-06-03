import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hookes/useFetch";
import PostAPI from "../API/PostAPI";
import Loader from "../components/UI/loader/Loader";


const PostIdPage = ()=>{
  const params = useParams();
  const [post , setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [fetchById, loadingPost, errorPost] = useFetch(async () => {
    const response = await PostAPI.getById(params.id);
    setPost(response.data);
  })
  const [fetchCommentById, loadingComm, errorComm] = useFetch(async () => {
    const response = await PostAPI.getCommentByPostId(params.id);
    setComment(response.data);
  })

  useEffect(()=>{
    fetchById(params.id);
    fetchCommentById(params.id)
  }, [])
  return(
    <div>
      <h1>Post number is {params.id}</h1>
      { loadingPost
        ?<Loader/>
        :<div>{post.id}. {post.title}</div>
      }
      <h1>Comments</h1>
      { loadingComm
        ?<Loader/>
        :<div>
          {comment.map((comments)=>
            <div
              key={comments.id}
              style={{ marginTop:"50px"}}
            >
              <span>
                #{comments.id}. {comments.body}
              </span>
              <div>
                name: {comments.name}
              </div>
              <div>
                email: {comments.email}
              </div>
            </div>
          )}
        </div>
      }
    
    </div>
  )
}

export default PostIdPage;