// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
// import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(
    applyMiddleware(
        sagaMiddleware
    ),
)

function configureStore(initialState: any) {
    const store = createStore(rootReducer, initialState, enhancer)
    // sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore
