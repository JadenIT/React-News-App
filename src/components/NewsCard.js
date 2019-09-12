import React from 'react'

const NewsCard = (props) => {
    return (
        <div className='card'>
            <img src={props.urlToImage} class="card-img-top" />
            <div className='card-body'>
                <div className='card-title'>
                    <h5 class="card-title">{props.title}</h5>
                </div>
                <a class='font-weight-bold' href={props.url} target='_blank'>{props.source.name}</a>
                <div className='card-text'>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard