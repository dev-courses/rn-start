import { applyMiddleware, createStore, compose, Action, StoreEnhancer } from 'redux'
import rootReducer, { RootState } from './rootReducer'

export default () => {
    const middlewares: Array<any> = []
    const middlewareEnhancer = applyMiddleware(...middlewares)
    
    const enhancers = [middlewareEnhancer]
    const composedEnhancers: StoreEnhancer<unknown, unknown> = compose(...enhancers)

    let store = createStore(rootReducer, composedEnhancers)
    return { store }
  }