import React from 'react'
import { Link } from 'react-router-dom'

const ArticleListComponent = ({articles}) => {
  return (
    <>
    {
        articles.map(
            (a)=>(
              <Link key={a.id} to={'/article/' + a.name}>
                <h3>{a.title}</h3>
                <p>{a.content[0].substring(0,100)}</p>
              </Link>        
            )
        )
      }
    </>
  )
}

export default ArticleListComponent