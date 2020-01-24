import { combineReducers } from 'redux'

import user from 'src/store/user'

const rootReducer = combineReducers({
  user,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>