import About from "../pages-rout/About";
import Login from "../pages-rout/Login";
import PostIdPage from "../pages-rout/PostIdPage";
import Posts from "../pages-rout/Posts";
import Test from "../pages-rout/Test";

export const privateRoutes = [
  {path:'about', component:About},
  {path:'posts/:id', component:PostIdPage},
  {path:'posts', component:Posts},
  {path:'test', component:Test},
]

export const publicRoutes =[
  {path:'login', component:Login}
]