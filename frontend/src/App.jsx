import { Children, StrictMode, useState } from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import ArticleList from './pages/ArticleList'
import { ArticlePage } from './pages/ArticlePage'
import { LayOut } from './LayOut'
import NotFound from './NotFound'

const routes=[
  {
  path:'/',
  element:<LayOut/>,
  errorElement:<NotFound/>,
  children:[{path:'/',element:<HomePage/>},
  {path:'/about',element:<AboutPage/>},
  {path:'/article',element:<ArticleList/>},
  {path:'/article/:name',element:<ArticlePage/>}]
  }
]

const router = createBrowserRouter(routes);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
