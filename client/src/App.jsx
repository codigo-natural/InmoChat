import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './routes/homePage'
import { Layout, RequireAuth } from './routes/layout'
import { ListPage } from "./routes/listPage"
import { Login } from './routes/login'
import { NewPostPage } from "./routes/newPostPage"
import { ProfilePage } from "./routes/profilePage"
import { ProfileUpdatePage } from "./routes/profileUpdatePage"
import { Register } from './routes/register'
import { SinglePage } from "./routes/singlePage"
import { listPageLoader, singlePageLoader } from './lib/loaders'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          // loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
