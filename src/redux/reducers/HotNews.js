import axios from 'axios'

const REQUEST = 'REQUEST'
const LOADING = 'LOADING'

const initialState = {
    loading: false,
    data: {}
}

const HotNews = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, { loading: action.option })
        case REQUEST:
            return Object.assign({}, state, { data: action.payload })
        default:
            return state
    }
}

/* option -> true || false */
const loadingAC = (option) => {
    return { type: LOADING, option: option }
}

export const RequestAC = () => {
    return function (dispatch) {
        dispatch(loadingAC(true))
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2bf3974e41554f20a3c70da11c634824')
            .then(function (res) {
                setTimeout(() => {
                    dispatch(loadingAC(false))
                    dispatch({ type: REQUEST, payload: res.data })
                }, 1)
            })
    }
}

export default HotNews