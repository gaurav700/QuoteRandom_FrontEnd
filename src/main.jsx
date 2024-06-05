import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/routes/App'
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from './routes/SignUp'
import Niche from './routes/Niche';
import Login from './routes/Login';
import PostListProvider, { ContextObj } from './store/post-list-store'
import Generate from './routes/Generate'
import quoteStore from './store'
import "bootstrap/dist/css/bootstrap.min.css"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/niche",
        element: <Niche />
      },
      {
        path: "/generate",
        element: <Generate />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={quoteStore}>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </Provider>
)
