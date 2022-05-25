import Login from "./routes/Login";
import Register from "./routes/Register";
import Profile from "./routes/Profile";
import Posts from "./routes/Posts";
import AddPost from "./routes/AddPost";
import SinglePost from "./routes/SinglePost";
import Home from "./routes/Home";
import AuthForm from "./components/AuthForm";
import { logout, authUser } from "./components/logout";

export { default as Login } from "./routes/Login.js";
export { default as Register } from "./routes/Register.js";
export { default as Profile } from "./routes/Profile.js";
export { default as Posts } from "./routes/Posts.js";
export { default as AddPost } from "./routes/AddPost.js";
export { default as SinglePost } from "./routes/SinglePost.js";
export { default as Home } from "./routes/Home.js";
export { default as AuthForm } from "./components/AuthForm.js";
export { logout, authUser } from "./components/logout.js";
