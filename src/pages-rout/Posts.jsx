import React,{useState,useMemo, useEffect} from "react";
// import axios from "axios";
import "../style/App.css";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import Loader from "../components/UI/loader/Loader";
import { usePosts } from "../hookes/usePosts";
import  PostAPI from "../API/PostAPI";
import { useFetch } from "../hookes/useFetch";
import { getPagesAmount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { Outlet } from "react-router-dom";


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: "", query:""});
  const [modal, setModal] = useState(false);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  
  const [totalPage, setTotalPage] = useState(0);
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, loadingPost, errorPost] = useFetch(async () => {
    const response = await PostAPI.getPosts(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPagesAmount(totalCount, limit));
  })
  function createPost(newPost){
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post){
    setPosts(posts.filter(p => p.id !== post.id));
  }
  function changePage(p){
    setPage(p);
    fetchPosts(limit, page);
  }
    useEffect(()=>{
      fetchPosts();
    }, [page])

  return (
    <div className="App">
      <MyButton style={{margin: "40px 0px 0px 0px"}}onClick={()=>setModal(true)}>
        Create My post
      </MyButton>
      <MyModal visisble={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {loadingPost
      ? <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:50}}><Loader/></div>
      : 
      <PostList remove={removePost} //тут передали функцию 
            posts={sortedAndSearchedPosts} // тут передали посты 
            title="Some title"/>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPage={totalPage}
      />
    </div>
  );
}

export default Posts;
