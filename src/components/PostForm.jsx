import React,{useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

// приняли нашу функцию создания поста
const PostForm = ({create})=>{

  const [post,setPost] = useState({title: " ", descrip: " "});

  // добавление поста
  function addNew(e){
    e.preventDefault(); 

    // объект куда летят данные нового поста
    const newPost = { 
      ...post, id: Date.now(),
      // ""...post" разворачиваем объект. Вид: {title " ", descrip: " ", id: Date.now()}
    }
    create(newPost); // передали данные нового поста в нашу функцию
    setPost({title: " ", descrip: " "});
  }

  return(
    <form>
    <MyInput value={post.title}
            type="text" 
            placeholder="Title"
            onChange={e => setPost({...post, title: e.target.value})}
            />
    <MyInput value={post.descrip} 
            type="text" 
            placeholder="Description"
            onChange={e => setPost({...post, descrip: e.target.value})}
            />
    <MyButton onClick={addNew}>Create post</MyButton>
  </form>
  )
}

export default PostForm;