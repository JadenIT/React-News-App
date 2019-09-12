import React from 'react'
import NewsCard from './NewsCard'

const ArticlesList = (props) => {
    return (
        props.articles
            ? <div class="card-columns">
                {props.articles.map(el => {
                    return (
                        <NewsCard
                            source={el.source}
                            title={el.title}
                            author={el.author}
                            content={el.content}
                            urlToImage={el.urlToImage}
                            url={el.url}
                        />
                    )
                })}
            </div>
            : null
    )
}

export default ArticlesList