import axios from "axios";

export default class PostAPI {
  static async getPosts(limit , page ){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page
      }
    } );
    return response;
  }
  
  static async getById(id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
  }

  static async getCommentByPostId(id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }
}