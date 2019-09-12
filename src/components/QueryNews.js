import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RequestAC, errorAC } from '../redux/reducers/QueryNews'
import Loader from './Loader'
import ArticlesList from './ArticlesList'

const mapStateToProps = (state) => ({ state })

const mapDispatchToProps = (dispatch) => ({
    RequestAC: function (query) {
        dispatch(RequestAC(query))
    },
    errorAC: function (error) {
        dispatch(errorAC(error))
    }
})

const QueryNews = (props) => {
    const [{ id }, { QueryNews }] = [props.parameters, props.state]

    useEffect(() => {
        if (id.trim().length > 0) {
            props.RequestAC(id)
            props.errorAC(null)
        }
        else {
            props.errorAC('Your search request is empty!')
        }
    }, [id])

    return (
        <div className='container'>
            {QueryNews.error
                ? <h1 style={{color: '#db2828'}} className='mt-4 mb-4'>{QueryNews.error}</h1>
            : <h1 className='mt-4 mb-4'>🔎 Result for {id}</h1>}
            {QueryNews.loading ? <Loader /> : null}
            <ArticlesList articles={QueryNews.data.articles} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryNews)