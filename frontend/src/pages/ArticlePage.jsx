import React from 'react'
import articles from '../article-content'
import { useParams } from 'react-router-dom'

export const ArticlePage = () => {
  const {name} = useParams();
  const article=articles.find(a=>a.name===name);
  return (
    <>
      <h1>This is {name} Article</h1>
      <h3>{article.title}</h3>
      {
        article.content.map(
          p=> <p key={p}>{p}</p>
        )
      }
    </>
  )
}
