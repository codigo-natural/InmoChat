import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './routes/homePage'
import { Layout } from './routes/layout'
import { Login } from './routes/login'
import { Register } from './routes/register'

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
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
