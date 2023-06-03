import React from 'react';
import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from "react-transition-group";

// прием списка постов, заголовка, и ф-ии удаления
const PostList = ({posts, title, remove})=>{

  if(!posts.length){
    return(
      <h1 style={{textAlign: 'center'}}>
        Posts not found!
      </h1>
    )
  }

  return(
    <div>
      <h1 style = {{textAlign: "center"}}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => 
          // в наши посты передаем ф-ию, номера(нумирует посты по порядку), пост(данные поста) и просто ключ
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem  remove={remove} number={index + 1} post={post} id={post.id}/>
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  )
} 

export default PostList;