import React from "react";
import {useNavigate} from "react-router-dom"
import MyButton from "./UI/button/MyButton";


const PostItem = (props) => {
  const router = useNavigate();
  console.log(router);
  return(
    <div className="post">
        <div className="post__content">
          {props.id}. <strong>{props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
          <MyButton 
              onClick={()=>router(`/posts/${props.post.id}`)}
              >Go to</MyButton>
          <MyButton 
              // при нажатии передаем данные поста кнопки 
              onClick={()=>props.remove(props.post)}
              >Delete</MyButton>
        </div>
    </div>
  )
}

export default PostItem;