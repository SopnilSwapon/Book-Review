import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import ReviewedBooks from './Components/Reviewed/ReviewedBooks';
import AddReview from './Components/AddReview';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: 'pages',
        element: <PagesToRead></PagesToRead>
      },
      {
        path:'/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/reviewed',
        element: <ReviewedBooks></ReviewedBooks>,
        loader: () =>fetch('/reviewdBooks.json')
      },
      {
        path: '/addReview',
        element: <AddReview></AddReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
