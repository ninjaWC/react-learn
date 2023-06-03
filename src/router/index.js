import About from "../pages-rout/About";
import PostIdPage from "../pages-rout/PostIdPage";
import Posts from "../pages-rout/Posts";
import Test from "../pages-rout/Test";

export const routes = [
  {path:'about', component:About},
  {path:'posts/:id', component:PostIdPage},
  {path:'posts', component:Posts},
  {path:'test', component:Test}
]