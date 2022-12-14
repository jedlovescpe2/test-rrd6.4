import {
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, {
  loader as blogPostsLoader,
} from "./pages/BlogPosts";
import ErrorPage from "./pages/ErrorPage";
import NewPostPage from "./pages/NewPost";
import PostDetailPage, {
  loader as blogPostLoader,
} from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage/>}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route
          index
          element={<BlogPostsPage />}
          loader={blogPostsLoader}
        />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader}
          // errorElement={<p>Error occured.</p>}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
  )
);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
