import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RequestAC } from '../redux/reducers/HotNews'
import Loader from './Loader'
import ArticlesList from './ArticlesList'

const mapStateToProps = (state) => ({ state })

const mapDispatchToProps = (dispatch) => ({
    RequestAC: function () {
        dispatch(RequestAC())
    }
})

const HowNews = (props) => {

    useEffect(() => {
        props.RequestAC()
    }, [])

    const { HotNews } = props.state

    return (
        <>
            <div className='container'>
                <h1 className='mt-4 mb-4'>🔥 Hot News</h1>
                {HotNews.loading ? <Loader /> : null}
                <ArticlesList articles={HotNews.data.articles} />
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HowNews)