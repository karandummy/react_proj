import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../article-content'
import ArticleListComponent from '../ArticleListComponent'

const ArticleList = () => {
  return (
    <>
    <h1>Articles</h1>
    <ArticleListComponent articles={articles}/>
    </>
  )
}

export default ArticleList